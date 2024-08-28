function diemTrungBinh(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Test Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsAverage1 = diemTrungBinh(dolphinsScores1);
const koalasAverage1 = diemTrungBinh(koalasScores1);

console.log("Test Data 1:");
if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100) {
    console.log(`Dolphins thắng với số điểm trung bình là: ${dolphinsAverage1.toFixed(1)}`);
} else if (koalasAverage1 > dolphinsAverage1 && koalasAverage1 >= 100) {
    console.log(`Koalas thắng với số điểm trung bình là: ${koalasAverage1.toFixed(1)}`);
} else if (dolphinsAverage1 === koalasAverage1 && dolphinsAverage1 >= 100 && koalasAverage1 >= 100) {
    console.log(`Kết quả: Hòa - Dolphins ${dolphinsAverage1.toFixed(1)} - Koalas ${koalasAverage1.toFixed(1)}`);
} else {
    console.log("Không có đội nào chiến thắng.");
}

// Test Data 2
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

const dolphinsAverage2 = diemTrungBinh(dolphinsScores2);
const koalasAverage2 = diemTrungBinh(koalasScores2);

console.log("Test Data 2:");
if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log(`Dolphins thắng với số điểm trung bình là: ${dolphinsAverage2.toFixed(1)}`);
} else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
    console.log(`Koalas thắng với số điểm trung bình là: ${koalasAverage2.toFixed(1)}`);
} else if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100 && koalasAverage2 >= 100) {
    console.log(`Kết quả: Hòa - Dolphins ${dolphinsAverage2.toFixed(1)} - Koalas ${koalasAverage2.toFixed(1)}`);
} else {
    console.log("Không có đội nào chiến thắng.");
}

// Test Data 3
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

const dolphinsAverage3 = diemTrungBinh(dolphinsScores3);
const koalasAverage3 = diemTrungBinh(koalasScores3);

console.log("Test Data 3:");
if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log(`Dolphins thắng với số điểm trung bình là: ${dolphinsAverage3.toFixed(1)}`);
} else if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100) {
    console.log(`Koalas thắng với số điểm trung bình là: ${koalasAverage3.toFixed(1)}`);
} else if (dolphinsAverage3 === koalasAverage3 && dolphinsAverage3 >= 100 && koalasAverage3 >= 100) {
    console.log(`Kết quả: Hòa - Dolphins ${dolphinsAverage3.toFixed(1)} - Koalas ${koalasAverage3.toFixed(1)}`);
} else {
    console.log("Không có đội nào chiến thắng.");
}