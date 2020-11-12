'use strict';

const thumbs = document.querySelectorAll('.thumb');  // querySelecterALL：()内で指定されたcssのセレクタにマッチする要素をすべて取得する
thumbs.forEach(function (item, index) {
    item.onclick = function() { // onclickイベントが発生すると、console.logが発生する
        // console.log(this.dataset.image); // ここの処理が、配列全ての項目に対して繰り返し処理される
        document.getElementById('bigimg').src = this.dataset.image;
    }
});