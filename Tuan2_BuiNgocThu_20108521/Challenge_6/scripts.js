// 1. Viết hàm tính tiền tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
const bills = [125, 555, 44];

// Kiểm tra hàm với bill value là 100
const testTip = calcTip(100);
console.log("Tiền tip cho bill 100:", testTip);

// Tiền tips
const tips = bills.map(calcTip);

// Tổng (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Kết quả
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);
