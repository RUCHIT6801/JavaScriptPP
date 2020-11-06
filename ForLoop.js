//Print powers of 2
let n =Math.floor((Math.random())*10);
console.log(n);
let a=1;
for (var i=0;i<n;i++){
    a=2*a
    console.log(a);
}

//Print nth harmonic
let b =Math.floor((Math.random())*10);
console.log(b);
let c=0;
for (var i=1;i<b+1;i++){
    c=c+1/i;
}
console.log(c);

//Determine if a number is prime
    let number =Math.floor((Math.random())*100);
    console.log(number);

    for (var d=2;d<number+1;d++){
        if(d==number){
            console.log("Number is prime");
            return;
        }else if(number%d==0){
            console.log("Number is not prime");
            return;
        }
    }

//Print prime numbers in given range 
let a = Math.floor((Math.random())*100);
let b = Math.floor((Math.random())*100);

if(a>b){
    lowerNumber=b;
    higherNumber=a;
}else{ 
    lowerNumber=a;
    higherNumber=b;
}

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


//Compute factorial
{
    let nums=Math.floor((Math.random())*10);
let naz=1;
for (var z=1;z<nums+1;z++){
    naz=naz*z;
}
console.log(nums+"! is:"+naz);
}



//Find PrimeFactors of a number
function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}

console.log("Prime Factors of 105 are: "prime_factors(105));