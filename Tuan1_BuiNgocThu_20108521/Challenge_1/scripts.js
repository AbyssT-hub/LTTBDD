function BMI(mass, height) {
    return mass / (height * height);
}

// Test Data 1
var markMass1 = 78; // Cân nặng của Mark (kg)
var markHeight1 = 1.69; // Chiều cao của Mark (m)

var johnMass1 = 92; // Cân nặng của John (kg)
var johnHeight1 = 1.95; // Chiều cao của John (m)

var markBMI1 = BMI(markMass1, markHeight1);
var johnBMI1 = BMI(johnMass1, johnHeight1);

var markHigherBMI1 = markBMI1 > johnBMI1;

// Test Data 2
var markMass2 = 95; // Cân nặng của Mark (kg)
var markHeight2 = 1.88; // Chiều cao của Mark (m)

var johnMass2 = 85; // Cân nặng của John (kg)
var johnHeight2 = 1.76; // Chiều cao của John (m)

var markBMI2 = BMI(markMass2, markHeight2);
var johnBMI2 = BMI(johnMass2, johnHeight2);

var markHigherBMI2 = markBMI2 > johnBMI2;

// Kết quả
console.log("Test Data 1:");
console.log("BMI của Mark: " + markBMI1);
console.log("BMI của John: " + johnBMI1);
console.log("Chỉ số BMI của Mark lớn hơn John? " + markHigherBMI1);

console.log("Test Data 2:");
console.log("BMI của Mark: " + markBMI2);
console.log("BMI của John: " + johnBMI2);
console.log("Chỉ số BMI của Mark lớn hơn John? " + markHigherBMI2);