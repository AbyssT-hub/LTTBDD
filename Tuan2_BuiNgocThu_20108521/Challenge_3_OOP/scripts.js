function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Phương thức 'tăng tốc' cho lớp Car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
};

// Phương thức 'phanh' cho lớp Car
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
};

// 1. Hàm tạo cho lớp EV (kế thừa từ Car)
function EV(make, speed, charge) {
  Car.call(this, make, speed); // Gọi constructor của lớp cha
  this.charge = charge;
}

// Kế thừa prototype của Car
EV.prototype = Object.create(Car.prototype);

// 2. Phương thức 'chargeBattery'
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3. Ghi đè phương thức 'accelerate' cho EV
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} đang chạy với tốc độ ${this.speed} km/h, với mức sạc ${this.charge}%`
  );
};

// 4. Tạo đối tượng xe điện và thử nghiệm
const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
