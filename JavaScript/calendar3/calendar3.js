let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let firstDate = new Date(year, month-1, 1);
let lastDate = new Date(year, month,0);

console.log(year,month,day);
// console.log(date); とやると、Sat Nov 14 2020 18:09:50 GMT+0900 がでるので、そこから「年、月、日」だけを取得する。

let table_title = year + "年" + month + "月";
let captionHtml = "<capyion>" + table_title + "</caption>";

let weekdays = ["日","月","火","水","木","金","土",];
let weekdaysStr ="<tr>";

for (var i = 0; i < 7; i ++) {
    if(i == 0) {
        weekdaysStr += "<td>" + weekdays[i] +"</td>";
    } else if(i == 6) {
        weekdaysStr += "<td>" + weekdays[i] +"</td>";
    }else {
        weekdaysStr += "<td>" + weekdays[i] +"</td>";
    }
}

weekdaysStr += "</tr>";

let htmlStr = "<tr>";
let startWeekDay = firstDate.getDay();
for ( let i = 0; i < startWeekDay; i ++) {
    htmlStr += "<td>&nbsp;</td>"
}

for (let i =1 ; i < lastDate.getDate(); i ++) {
    let date = new Date(year, month-1, i);
    let weekDay = date.getDay();
    let dateStr = year+"."+month+"."+i

    let cellStr = date.getDate();
    if(weekDay == 0) htmlStr += "<tr>";
    htmlStr += "<td>";
    htmlStr += cellStr + "</a></td>";
    if(weekDay == 6) htmlStr += "</tr>\n";
}

let lastDayWeek = lastDate.getDay();
if (lastDayWeek != 6) {
    for( let i = lastDayWeek +1; i <= 6; i ++) {
        htmlStr += "<td>&nbsp;</td>";
    }
    htmlStr += "</tr>";
}

document.getElementById("calendar").innerHTML = "<table>" + captionHtml + weekdaysStr +htmlStr + "</table>";