
let num = 153;
let sum = 0;
console.log("Number: "+num);
//Sum of digits:-
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of the digits is: "+sum);


//Armstrong number:-
let temp = num;
let sum1= 0 ;
let digits = num.toString().length;

while (temp > 0) {
    let digit = temp % 10;
    sum1 += digit ** digits;
    temp = Math.floor(temp / 10);
}
if (sum1 === num) {
    console.log("Is it an Armstrong number? Yes");
} else {
    console.log("Is it an Armstrong number? No");
}


//Prime number:-
let prime = true;

if(num<=1){
    prime=false;
}
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
}
console.log(prime ? "Is this a Prime Number? Yes" : "Is this a Prime Number? No");

//Determinig factors:-
let num1=153
console.log("Factors are:")
for (let j = 1; j <= num1; j++) {
    if (num1 % j === 0) {
        console.log(j);
    }
}
