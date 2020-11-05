//Sequence Practice Problems

//Random function to get single digit
let a = Math.floor(Math.random()*10);
console.log("Random Numvber:" +a);

//Get a Dice Number
let b = Math.floor((Math.random()*6)+1);
console.log("Dice Number:" +b);

//Get two random Dice Number
console.log("Sum of Dice Number:" +((Math.floor((Math.random()*6)+1))+ (Math.floor((Math.random()*6)+1))));

//Get 5 random 2 digit values get their sum and avg
let d1 = Math.floor(Math.random()*100);
let d2 = Math.floor(Math.random()*100);
let d3 = Math.floor(Math.random()*100);
let d4 = Math.floor(Math.random()*100);
let d5 = Math.floor(Math.random()*100);

console.log("Sum of random numbers is: " +(d1+d2+d3+d4+d5));
console.log("Avg of random numbers is: " +((d1+d2+d3+d4+d5)/5));

//Unit Conversion
let plotArea=(60*40)/(3.33*3.33);
console.log("42 inch in feet is: " +42/12 +"ft");
console.log("Rectangular Plot in Meters is:"+ plotArea.toFixed(2)+ " squaure meter");
console.log("Area of 25 such plots is " +25*plotArea.toFixed(2)+ " squaure meter");