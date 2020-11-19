'use strict';

// var myButton = 0;

// // startボタンを押した
// function myCheck() {
//     if(myButton == 0) {
//         var myStart = new Date();
//         myButton = 1;
//         document.myForm.myFormButton.value = "Stop!";	
//         var myInterval = serInterval("myDisp()", 1);
//     } else {
//         myDisp();
//         myButton = 0;
//         document.myForm.myFormButton.value = "Start";
//         clearInterval(myInterval);
//     }
// }

// function myDisp() {
//     var myStop = new Date();
//     var myTime = myStop.getTime() - myStart.getTime();
//     var myH = Math.floor(myTime/(60 * 60 * 1000));
//     myTime = myTime - (myH * 60 * 60 * 1000);
//     var myM = Math.floor(myTime / ( 60 * 1000));
//     myTime = myTime - (myM * 60 * 1000);
//     var myS = Math.floor(myTime  / 1000);
//     var myMS = myTime % 1000;
//     document.myForm.myFormTime.value = myH + ":" + myM + ":" + myS + ":" + myMS;
// }

var myButton = 0;	// [Start]/[Stop]のフラグ
function myCheck(){	
if (myButton==0){	// Startボタンを押した
var myStart=new Date();	// スタート時間を退避
myButton = 1;	
document.myForm.myFormButton.value = "Stop!";	
myInterval=setInterval("myDisp()",1);	
}else{	// Stopボタンを押した
myDisp();	
myButton = 0;	
document.myForm.myFormButton.value = "Start";	
clearInterval( myInterval );	
}	
}	
function myDisp(){	
myStop=new Date();	// 経過時間を退避
myTime = myStop.getTime() - myStart.getTime();	// 通算ミリ秒計算
myH = Math.floor(myTime/(60*60*1000));	// '時間'取得
myTime = myTime-(myH*60*60*1000);	
myM = Math.floor(myTime/(60*1000));	// '分'取得
myTime = myTime-(myM*60*1000);	
myS = Math.floor(myTime/1000);	// '秒'取得
myMS = myTime%1000;	// 'ミリ秒'取得
document.myForm.myFormTime.value = myH+":"+myM+":"+myS+":"+myMS;	
}