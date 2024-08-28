// 1. Tạo lớp CarCl sử dụng ES6 class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // 2. Getter để lấy tốc độ theo mi/h
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3. Setter để đặt tốc độ theo mi/h (chuyển đổi sang km/h trước khi lưu)
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  // Phương thức 'tăng tốc'
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
  }

  // Phương thức 'phanh'
  brake() {
    this.speed -= 5;
    console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
  }
}

// 4. Tạo đối tượng mới và thử nghiệm
const ford = new CarCl("Ford", 120);

console.log(ford.speedUS); // Lấy tốc độ theo mi/h

console.log("Lần 1");
ford.accelerate(); // BMW tăng tốc
ford.brake(); // BWM phanh

console.log("\nLần 2");
ford.accelerate(); // BMW tăng tốc
ford.brake(); // BWM phanh

console.log("\nLần 3");
ford.accelerate(); // BMW tăng tốc
ford.brake(); // BWM phanh

ford.speedUS = 50; // Đặt tốc độ theo mi/h (sẽ tự động chuyển đổi sang km/h)
console.log(ford);
