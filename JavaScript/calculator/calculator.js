// 現在の合計値
myTotal = 0;

// 原罪入力してる値
myInput= "";

// 合計と入力値の演算子(足し算とか引き算、掛け算など計算で使われる記号や値の大小を比較する際に使われる記号のこと)
myCalc = "+";

// １回前に入力したもの 0:数字 1:演算子
myFlg = 1;

// 0~9または小数点ボタンを押した / １回前に入力したものは数値 / 現在入力している値に追加 / 現在入力している値表示
function myValue(myData) {
    myFlg = 0;
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

// 演算ボタンを押した
function myCalculate(myData) {
    if (myFlg == 0) {
        myFlg = 1;
        myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        // eval() 関数は、計算式の文字列を計算して、結果を戻します。
        // この関数のおかげで、どんな演算ボタンが押されようが計算してくれるわけです。
        myInput = "";
        document.myForm.myLine.value = myTotal;
    }
    if(myData == "=") {
        myTotal = 0;
        myCalc ="+";
    } else {
        myCalc = myData;
        // 連続して演算ボタンを押した場合、前回を取り消す。
    }
}

function myC() {
    myTotal = 0;
    myCalc = "+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}