
let n = 153;

// 1. Sum of first n natural numbers
let sumN = 0;
for (let i = 1; i <= n; i++) {
    sumN += i;
}
console.log("Sum of first " + n + " natural numbers: " + sumN);


// 2. Multiplication table of n
console.log("\nMultiplication table of " + n + ":");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


// 3. Check whether n is a prime number
let primeNum = n;
let isPrime = true;

if (primeNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("\nIs it a prime number? " + (isPrime ? "Yes" : "No"));


// 4. Print all factors of n
let factorNum = n;
let factors = [];

for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) {
        factors.push(i);
    }
}

console.log("Factors: " + factors.join(","));


// 5. Sum of all digits of n
let digitNum = n;
let digitSum = 0;

while (digitNum > 0) {
    let digit = digitNum % 10;
    digitSum += digit;
    digitNum = Math.floor(digitNum / 10);
}

console.log("Sum of its digits: " + digitSum);


// 6. Check whether n is an Armstrong number
let armstrongNum = n;
let temp = armstrongNum;
let digitCount = String(armstrongNum).length;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** digitCount;
    temp = Math.floor(temp / 10);
}

let isArmstrong = (armstrongSum === armstrongNum);

console.log("Is it an Armstrong number? " + (isArmstrong ? "Yes" : "No"));

