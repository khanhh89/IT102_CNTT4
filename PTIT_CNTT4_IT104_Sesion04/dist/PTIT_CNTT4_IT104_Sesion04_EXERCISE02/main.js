let scores = [4.5, 5.5, 3.0, 2.5, 7.0, 7.75, 5.25];
let total = 0;
for (let score of scores) {
    total += score;
}
let tb = total / scores.length;
console.log("Điểm trung bình: ", tb.toFixed(2));
