//Return max and min value
let a1 = Math.floor(Math.random()*1000);
let a2 = Math.floor(Math.random()*1000);
let a3 = Math.floor(Math.random()*1000);
let a4 = Math.floor(Math.random()*1000);
let a5 = Math.floor(Math.random()*1000);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

let max=a1;
let min=a2;
if (a2>a1){
    max=a2;
}  
if(a3>max){
    max=a3;
}
if(a4>max){
    max=a4;
}
if(a5>max){
    max=a5;
}

if (a2<a1){
    min=a2;
}  
if(a3<min){
    min=a3;
}
if(a4<min){
    min=a4;
}
if(a5<min){
    min=a5;
}

console.log("Max number is:" +max);
console.log("Min number is:" +min);


//Print true if day is between march 20 and june 20 false otherwise
let a=Math.floor(Math.random()*100)
let day = ((a%31) + 1);
let month = ((a%12) + 1);


if (month==3 && day>20) 
{
    console.log("day is:" +day);
    console.log("month is: "+ month);
    console.log("true");
} else if(month==4){
    console.log("day is:" +day);
    console.log("month is: "+ month);
    console.log("true");
}else if(month==5){
    console.log("day is:" +day);
    console.log("month is: "+ month);
    console.log("true");
} else if(month==6 && day<20){
    console.log("day is:" +day);
    console.log("month is: "+ month);
    console.log("true");
} else {
    console.log("day is:" +day);
    console.log("month is: "+ month);
    console.log("false");
}

//Check of a year is leap year or not
let year = Math.floor(Math.random()*10000);
console.log(year);
if (year%4==0){
    if (year%100==0){
        console.log("Year is not a leap year");
    }else if (year%400==0){
        console.log("Year is leap year");
    }else{
        console.log("Year is leap year");
    }}
else{
    console.log("Year is not a leap year");
}

//Simulate a coin flip
let coin=((Math.floor(Math.random()*10))%2);
console.log(coin);
if (coin==1){
    console.log("Heads");
}else{
    console.log("Tails");
}