const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date(); // 任意の日付を設定する方法 引数の中に数字をいれる // newはオブジェクトを初期化するキーワード
let year = date.getFullYear() // Date オブジェクトが持つ値から、年の値を取得する
let month = date.getMonth()+1  // 0 が年の最初の月を示す ので、+1を記載する

const config = {
    show: 1,
}

function showCalendar(year, month) {
    for ( i = 0 ; i < config.show; i++) {
        const  calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}

function createCalendar(year, month) {
    const  today = date.getDate()
    // getDate：日を取得する getDay：曜日を０〜６の値で取得する 

    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得 // 1ヶ月加えて翌月にします。日付に0を設定し、該当月のの0日（つまり、前月末）にします。

    const endDayCount = endDate.getDate() // 月の末日

    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日

    const startDay = startDate.getDay() // 月の最初の日の曜日を取得


    let dayCount = 1 // 日にちのカウント 何日から始めるか
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year  + '年' + month + '月' + '</h1>'
    calendarHtml += '<table>'

    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>' // 横の配列（行）
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>' // 縦の配列（列）

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前 追加分
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた 追加部分
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
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

    return calendarHtml
}

function moveCalendar(e) {
    document.querySelector('#calendar').innerHTML = ''

    if (e.target.id === 'prev') {
        month--

        if (month < 1) {
            year--
            month = 12
        }
    }

    if (e.target.id === 'next') {
        month++

        if (month > 12) {
            year++
            month = 1
        }
    }

    showCalendar(year, month)
}

document.querySelector('#prev').addEventListener('click', moveCalendar)
document.querySelector('#next').addEventListener('click', moveCalendar)

showCalendar(year, month)

