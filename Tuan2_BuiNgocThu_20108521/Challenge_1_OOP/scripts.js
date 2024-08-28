// 1. Hàm tạo (constructor function) để tạo đối tượng 'Xe hơi'
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Phương thức 'tăng tốc'
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
};

// 3. Phương thức 'phanh'
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
};

// 4. Tạo 2 đối tượng 'Xe hơi' và thử nghiệm
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

console.log("Lần 1");
car1.accelerate(); // BMW tăng tốc
car1.brake(); // BWM phanh
car2.accelerate(); // Mercedes tăng tốc
car2.brake(); // Mercedes phanh

console.log("\nLần 2");
car1.accelerate(); // BMW tăng tốc
car1.brake(); // BWM phanh
car2.accelerate(); // Mercedes tăng tốc
car2.brake(); // Mercedes phanh

console.log("\nLần 3");
car1.accelerate(); // BMW tăng tốc
car1.brake(); // BWM phanh
car2.accelerate(); // Mercedes tăng tốc
car2.brake(); // Mercedes phanh
