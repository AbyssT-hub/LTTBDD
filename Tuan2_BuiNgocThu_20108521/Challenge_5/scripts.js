// 1. Tạo hàm mũi tên để tính điểm trung bình
const calcAverage = (diem1, diem2, diem3) => (diem1 + diem2 + diem3) / 3;

// 2. Tính điểm trung bình cho cả hai đội (sử dụng Dữ liệu 1 và Dữ liệu 2)
const avgDolphinsData1 = calcAverage(44, 23, 71);
const avgKoalasData1 = calcAverage(65, 54, 49);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);

// 3. Tạo hàm để kiểm tra đội chiến thắng
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Đội Dolphins thắng (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Đội Koalas thắng (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("Không có đội nào thắng!");
  }
};

// 4. Sử dụng hàm checkWinner để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2
console.log("--- Kết quả cho Dữ liệu 1 ---");
checkWinner(avgDolphinsData1, avgKoalasData1);

console.log("\n--- Kết quả cho Dữ liệu 2 ---");
checkWinner(avgDolphinsData2, avgKoalasData2);
