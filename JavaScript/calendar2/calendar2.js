function generate_year_range(start, end) {
    var years = "";
    // varでは再宣言、再代入が可能です。
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
// element：HTML や XML 文書における、要素（タグ）に相当

var createYear = generate_year_range(1995, 2050);
// プルダウンの年の範囲

document.getElementById("year").innerHTML = createYear;
// .innerHTML：html要素の中身を変更することができるJavaScriptの便利な関数

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');
// htmlカレンダー テーブルの表示
// id="calendar" の要素の data-lang の値を表示します。

var months = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",];
var days = ["日","月","火","水","木","金","土"];
// カレンダーにて表示させる文字列

var dayHeader ="<tr>";
for (day in days) {
    dayHeader += "<th data-days='" + days[day] + "'>" + days[day] +"</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;
// thead-monthを取得して、そこにdaysを導入してる

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
// htmlのh4に当たる部分
// show は要素を表示？

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function prev() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value); // parseIntは整数専用であり、数字だけ解析して取り出すことが可能
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear); 
}


function showCalendar(month, year) {  // カレンダーの数字部分を作成する
    var firstDay = ( new Date( year, month, ) ).getDay();

    tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";
    // カレンダーの数字部分

    monthAndYear.innerHTML = year + "年 " + months[month] ;
    selectYear.value = year;
    selectMonth.value = month;
    // selectオブジェクトの値（value）

    var date = 1;
    for (  var i = 0; i < 6; i ++) {
        var row = document.createElement("tr");

        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j <firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");  // .createTextNodeは、「HTML 文書」などの、タグ以外の文字データに相当する
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) { // 日数がその月より多くなったらここで終了
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.className = "date-picker selected"; // 対象要素のクラス名が cellの"td" であった場合の処理をここに記述。今日だった場合、クラス名をつけてcssで色をつける
                }
                row.appendChild(cell); // .appendChild：要素を指定し、その要素の子要素として、HTMLタグを追加することができます。この場合は"td"？
                date++;
            }
        }

        tbl.appendChild(row);
    }
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}