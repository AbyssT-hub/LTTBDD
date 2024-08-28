function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Test Data 1
var markMass1 = 78; // Cân nặng của Mark (kg)
var markHeight1 = 1.69; // Chiều cao của Mark (m)

var johnMass1 = 92; // Cân nặng của John (kg)
var johnHeight1 = 1.95; // Chiều cao của John (m)

var markBMI1 = calculateBMI(markMass1, markHeight1);
var johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Test Data 2
var markMass2 = 95; // Cân nặng của Mark (kg)
var markHeight2 = 1.88; // Chiều cao của Mark (m)

var johnMass2 = 85; // Cân nặng của John (kg)
var johnHeight2 = 1.76; // Chiều cao của John (m)

var markBMI2 = calculateBMI(markMass2, markHeight2);
var johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Output the results
function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        return `BMI của Mark (${markBMI.toFixed(1)}) lớn hơn John (${johnBMI.toFixed(1)})!`;
    } else if (johnBMI > markBMI) {
        return `BMI của John (${johnBMI.toFixed(1)}) lớn hơn Mark (${markBMI.toFixed(1)})!`;
    } else {
        return "Mark và John có cùng chỉ số BMI!";
    }
}

console.log("Test Data 1:");
console.log(compareBMI(markBMI1, johnBMI1));

console.log("Test Data 2:");
console.log(compareBMI(markBMI2, johnBMI2));