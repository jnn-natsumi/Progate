const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date(); // 任意の日付を設定する方法 引数の中に数字をいれる // newはオブジェクトを初期化するキーワード
const year = date.getFullYear() // Date オブジェクトが持つ値から、年の値を取得する
const month = date.getMonth()+1  // 0 が年の最初の月を示す ので、+1を記載する

const  today = date.getDate()
// getDate：日を取得する getDay：曜日を０〜６の値で取得する 

const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得 // 1ヶ月加えて翌月にします。日付に0を設定し、該当月のの0日（つまり、前月末）にします。

const endDayCount = endDate.getDate() // 月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント 何日から始めるか
let calendarHtml = '' // HTMLを組み立てる変数

calendarHtml += '<h1>' + year  + '年' + month + '月' + today + '日' + '</h1>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>' // 横の配列（行）
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>' // 縦の配列（列）

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td></td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            calendarHtml += '<td></td>'
        } else if (dayCount === today) {
            calendarHtml += "<td class='today'>" + dayCount + "</td>"
            dayCount++
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml