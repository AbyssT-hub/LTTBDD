class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
    return this; // Enable chaining for CarCl
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h`);
    return this; // Enable chaining for CarCl
  }
}

// 1. Tạo lớp con 'EVCl'
class EVCl extends CarCl {
  #charge; // Private charge property

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // 2. Phương thức chargeBattery (có thể gọi chuỗi)
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} đang được sạc đến ${this.#charge}%`);
    return this; // Enable chaining
  }

  // 3. Ghi đè phương thức 'accelerate' (có thể gọi chuỗi)
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} đang chạy với tốc độ ${this.speed} km/h, với mức sạc ${
        this.#charge
      }%`
    );
    return this; // Enable chaining
  }
}

// Test data
const rivian = new EVCl("Rivian", 120, 23);

// Thử nghiệm gọi chuỗi
rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate();
