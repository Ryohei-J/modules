// 1: 開発, 0: 睡眠
var arrays = [
    [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0], [1, 0, 1, 0, 0], [0, 1, 1, 0, 0], [1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0], [1, 0, 0, 1, 0], [0, 1, 0, 1, 0], [1, 1, 0, 1, 0],
    [0, 0, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 0, 0, 1], [1, 1, 0, 0, 1],
    [0, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 1, 0, 1], [1, 1, 1, 0, 1],
    [0, 0, 0, 1, 1], [1, 0, 0, 1, 1], [0, 1, 0, 1, 1], [1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1], [1, 0, 1, 1, 1], [0, 1, 1, 1, 1], [1, 1, 1, 1, 1],
]

var minTime = 999
var lines = '61 30 10 30'

arrays.forEach((array) => {
    var input = lines.split(' ')
    var n = Number(input[0]) // ソースコードの行数
    var x = Number(input[1]) // 1時間で書ける行数
    var f = Number(input[2]) // 減少する行数
    var s = Number(input[3]) // 増加する行数

    var totalCode = 0 // 書いたコード行数
    var totalTime = 0 // かかった時間

    for (value of array) {
        // 開発する場合
        if (value === 1) {
            totalCode += x
            x -= f
            totalTime += 1
            // 書き終えた場合
            if (totalCode >= n) {
                break
            }
        }
        // 睡眠する場合
        else {
            totalTime += 3
            x += s
            // 元々書ける行数を超えないよう調整
            if (x > Number(input[1])) {
                x = Number(input[1])
            }
        }
    }
    // コードを書き終えた時間が最短の場合
    if (totalCode >= n && totalTime < minTime) {
        minTime = totalTime
    }
})

console.log(minTime)