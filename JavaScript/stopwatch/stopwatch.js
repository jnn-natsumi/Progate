
(function() {
    'use strict';

    // htmlのidからデータを取得。取得したデータを変数に代入。
    var timer  = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    // クリック時の時間を保持するための変数定義
    var startTime;

    // 経過時刻を更新するための変数。最初は0で初期化している。
    var elapsedTime = 0;

    // タイマーを止めるにはclearTimeを使う必要があり、そのためにclearTimeoutの引数に渡す。
    var  timerId;

    // タイマーをストップする。再開したら、0になるのを防ぐための変数。
    var timeToadd = 0;

    // ミリ秒の表示ではなく、分とか秒の直すための関数。
    // 他のところからも呼び出すので、別関数としてfunctionを作る。
    function updateTimetText() {

        // m（分） = 135200 / 60000ミリ秒で割った数の商 2分
        var m = Math.floor(elapsedTime / 60000);

        // s（秒） = 135200 % 60000ミリ秒で / 1000（ミリ秒なので1000で割る） 15秒
        var s = Math.floor(elapsedTime % 60000 / 1000);

        // ms（ミリ秒） = 135200ミリ秒を % 1000ミリ秒で割った数のあまり
        var ms = elapsedTime % 1000;

        // hrmlで表示の桁を固定させる ex) 3 : 03
        // slice引数にマイナスの数値を指定すると後ろから数える（指定位置から終了位置までの文字列を抜き出す（負の引数は後ろから））
        m = ('0' + m).slice(-2)
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);

        timer.textContent = m + ':' + s + ':' + ms;
    }

    //再帰的に使える用の関数
    function countUp(){

        //timerId変数はsetTimeoutの返り値になるので代入する
        timerId = setTimeout(function(){

            //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText();

            //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
            countUp();

        //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
        },10);
    }

    // startボタンにクリック時のイベントを追加
    start.addEventListener('click', function() {
        startTime = Date.now();
        countUp();
    });

    // stopボタンにクリック時のイベントを追加
    stop.addEventListener('click', function() {
        clearTimeout(timerId);

        //タイマーに表示される時間elapsedTimeが現在時刻かたスタートボタンを押した時刻を引いたものなので、
        //タイマーを再開させたら0になってしまう。elapsedTime = Date.now - startTime
        //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
       timeToadd += Date.now() - startTime;

    });

    // resetボタンにクリック時のイベントを追加
    reset.addEventListener('click', function () {
        elapsedTime = 0;
        timeToadd = 0;
        updateTimetText();
    });
})();