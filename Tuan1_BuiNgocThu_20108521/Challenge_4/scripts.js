const bill1 = 275; // Test Data 1
const bill2 = 40; // Test Data 2
const bill3 = 430; // Test Data 3
// IF-ELSE
let tipPercentage1;
if (bill1 >= 50 && bill1 <= 300) {
    tipPercentage1 = 0.15;
} else {
    tipPercentage1 = 0.20;
}
const tip1 = bill1 * tipPercentage1;
const total1 = bill1 + tip1;

console.log("*****Test Data 1*****")
console.log(`Hóa đơn: ${bill1}`);
console.log(`Tiền tip: ${tip1}`);
console.log(`Tổng cộng: ${total1}`);


// 3 ngôi (ternary)
const tipPercentage2 = (bill2 >= 50 && bill2 <= 300) ? 0.15 : 0.20;
const tip2 = bill2 * tipPercentage2;
const total2 = bill2 + tip2;

console.log("*****Test Data 2*****")
console.log(`Hóa đơn: ${bill2}`);
console.log(`Tiền tip: ${tip2}`);
console.log(`Tổng cộng: ${total2}`);