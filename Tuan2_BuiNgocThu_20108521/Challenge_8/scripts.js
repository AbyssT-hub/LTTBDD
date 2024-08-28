// Hàm tính tiền tip (từ các thử thách trước)
function calcTip(giaTriHoaDon) {
  return giaTriHoaDon >= 50 && giaTriHoaDon <= 300
    ? giaTriHoaDon * 0.15
    : giaTriHoaDon * 0.2;
}

// 1. Tạo mảng 'bills'
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Tạo mảng rỗng cho 'tips' và 'totals'
const tips = [];
const totals = [];

// 3. Sử dụng vòng lặp for để tính toán tips và totals
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Các hóa đơn:", bills);
console.log("Tiền tip:", tips);
console.log("Tổng cộng:", totals);

// 4. Bonus: Hàm tính trung bình cộng
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Tính toán và in ra trung bình cộng của mảng 'totals'
const averageTotal = calcAverage(totals);
console.log("Trung bình:", averageTotal);
