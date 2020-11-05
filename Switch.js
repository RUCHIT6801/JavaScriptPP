//Read single digit and write the number in word
let num=Math.floor(Math.random()*10);
console.log(num);
switch (num) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    default:
        console.log("nine");
        break;
}

//Read a number and display week day
let day=(Math.floor(Math.random()*10)%7);
console.log(day);
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
        break;
}

//Read a number and display place value
let i=100;
console.log(i);
switch (i) {
    case 10:
        console.log("ten");
        break;
    case 100:
        console.log("hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("ten thousand");
        break;
    default:
        console.log("Enter valid number");
        break;
}

//Enter three numbers and find max and min after doing mathematical operations on them
let d1=Math.floor(Math.random()*10);
let d2=Math.floor(Math.random()*10);
let d3=Math.floor(Math.random()*10);

console.log(d1);
console.log(d2);
console.log(d3);

let f1=d1+d2*d3;
let f2=d1%d2+d3;
let f3=d3+d1/d2;
let f4=d1*d2+d3;

console.log("f1: " +f1);
console.log("f2: " +f2);
console.log("f3: " +f3);
console.log("f4: " +f4);

let max=f1;
let min=f2;
if (f2>f1){
    max=f2;
}  
if(f3>max){
    max=f3;
}
if(f4>max){
    max=f4;
}

if (f2<f1){
    min=f2;
}  
if(f3<min){
    min=f3;
}
if(f4<min){
    min=f4;
}

console.log("max:" +max);
console.log("min:" +min);

//Unit Conversion
let e=Math.floor(Math.random()*100);
let choice=((Math.floor(Math.random()*10))%4);
switch (choice) {
    case 0:
        console.log(e+" feet is " +e*12+"inches");
        break;
    case 1:
        console.log(e+" feet is " +e/3.33+"meter");
        break;
    case 2:
        console.log(e+" inches is " +e/12+"feet"); 
    default:
        console.log(e+" meter is " +e*3.33+"feet");
        break;
}