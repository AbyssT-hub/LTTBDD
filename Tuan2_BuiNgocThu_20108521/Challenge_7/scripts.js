// 1. Tạo đối tượng cho Mark và John
const mark = {
  hoTen: "Mark Miller",
  canNang: 78,
  chieuCao: 1.69,

  // 2. Phương thức calcBMI
  calcBMI: function () {
    this.bmi = this.canNang / (this.chieuCao * this.chieuCao);
    return this.bmi;
  },
};

const john = {
  hoTen: "John Smith",
  canNang: 92,
  chieuCao: 1.95,

  // 2. Phương thức calcBMI (giống với của Mark)
  calcBMI: function () {
    this.bmi = this.canNang / (this.chieuCao * this.chieuCao);
    return this.bmi;
  },
};

// Tính toán chỉ số BMI
mark.calcBMI();
john.calcBMI();

// 3. In ra console ai có chỉ số BMI cao hơn
if (mark.bmi > john.bmi) {
  console.log(
    `Chỉ số BMI của ${mark.hoTen} (${mark.bmi.toFixed(1)}) cao hơn của ${
      john.hoTen
    } (${john.bmi.toFixed(1)})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `Chỉ số BMI của ${john.hoTen} (${john.bmi.toFixed(1)}) cao hơn của ${
      mark.hoTen
    } (${mark.bmi.toFixed(1)})`
  );
}
