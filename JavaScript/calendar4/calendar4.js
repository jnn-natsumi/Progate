'use strict';

let now = new Date();
let year = now.getYear();
 if ((year % 4  == 0 && year % 100 != 0) || (year % 400 == 0)) {alert("今年は閏年です");}
 else {alert("今年は平年です");}

 if (year > 1867) wareki = year - 1867;
 if (year > 1911) wareki = year - 1911;
 if (year > 1925) wareki = year - 1925;
 if (year > 1988) wareki = year - 1988;
 if (year > 2019) wareki = year - 2019;


if(year < 1900)year += 1900;
let mon = now.getMonth() +1;
let date = now.getDate();
let day = now.getDay();

let days = new Array("日","月","火","水","木","金","土");
let days_color = new Array("ff0000","","","","","","0000ff");

let today = year + "年" + mon + "月" + date + "日" + "(<font color='" + days_color[day] + "'>" + days[day] + "</font>)";
document.write(today);
document.write("<hr>");

// 始まりの日
let firstdate = new Date(year + "/" + mon + "/1");
let firstday = firstdate.getDay();

// 終わりの日
let lastdate = new Array(31,28,31,30,31,30,31,31,30,31,30,31); 
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    lastdate[1]++;
}

// カレンダー表示
document.write("<table border='2'>");
document.write("<tr><th coslpan='7'>" + year + "年" + mon + "月</th></tr>");
document.write("<tr>");
for (var m = 0; m < 7 ; m++) {
    document.write("<th><font color='" + days_color[m] + "'>" + days[m] + "</font></th>");
}
document.write("</tr>");

for (var n = 0; n < 6 ; n++) {
    document.write("<tr>");
    for (var m = 0; m < 7; m ++) {
        document.write("<td align='right'>");
        let d= (n*7 + m + 1 -firstday);
        if (d > 0 && d <= lastdate[mon-1]) {
            document.write("<font color='" + days_color[m] + "'>" + d + "</font>");
        }else {
            document.write("&nbsp;");
        }
        document.write ("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// 祝日（春分、秋分の日以外）
let happy_date = new Array("1,1,0","1,8,14","2,11,0","4,29,0","5,3,0","5,4,0","5,5,0","7,15,21","9,15,21","10,8,14","11,3,0","11,23,0","12,23,0");
let happy_name = new Array("元日","成人の日","建国記念の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","敬老の日","体育の日","文化の日","勤労感謝の日","天皇誕生日");
for (var i=0; i<happy_date.length; i++) {
    let sd = happy_date[i].split(",");
    if(sd[2] > 0) {
        if(mon == sd[0] && day == 1 && date >= sd[1] && date <= sd[2])
        happy = happy_name[i];
    }  else {
        if (mon == sd[0] && date == sd[1])
        var happy = happy_name[i];
    }
}

document.write("<font color='#ff0000'>"+happy+"</font>");
