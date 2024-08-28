// 1. Tạo hàm 'printForecast'
function printForecast(arr) {
  let chuoiDuBao = "";

  for (let i = 0; i < arr.length; i++) {
    chuoiDuBao += `... ${arr[i]}°C trong ${i + 1} ngày `;
  }

  chuoiDuBao += "..."; // Thêm dấu ba chấm cuối cùng
  console.log(chuoiDuBao);
}

// Dữ liệu kiểm thử
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Gọi hàm với dữ liệu kiểm thử
console.log("--- Dữ liệu 1 ---");
printForecast(data1);

console.log("\n--- Dữ liệu 2 ---");
printForecast(data2);
