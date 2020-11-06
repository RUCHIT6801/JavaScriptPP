//UC1a-Generate Random 3 Digit numbers
let a =Math.floor(Math.random()*(900)+100);
let b =Math.floor(Math.random()*(900)+100);
let c =Math.floor(Math.random()*(900)+100);

//UC1b-Store random numbers in an Array
let threeDigitArr=[a,b,c];
console.log(threeDigitArr);

//UC1c-Find 2nd Largest and 2nd smallest without sorting

    var max = Math.max.apply(null, threeDigitArr), // get the max of the array
        maxi = threeDigitArr.indexOf(max);
    threeDigitArr[maxi] = -Infinity; // replace max in the array with -infinity
    var secondMax = Math.max.apply(null, threeDigitArr); // get the new max 
    threeDigitArr[maxi] = max;
    console.log("UC1: "+secondMax);

//UC2-Find 2nd Largest and 2nd Smallest Using Sorting
var second = threeDigitArr.sort()[1];
console.log("UC2: "+second);


//UC3-Find Prime Factors of a Number and store it in an Array
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

console.log("UC3-Prime Factors of given number are: " +prime_factors(88));

//UC4-Find three integers from an array whose sum is zero
function findTriplets(arr) 
{   let n= arr.length;
    let found = true; 
    for (let i=0; i<n-2; i++) 
    { 
        for (let j=i+1; j<n-1; j++) 
        { 
            for (let k=j+1; k<n; k++) 
            { 
                if (arr[i]+arr[j]+arr[k] == 0) 
                { 
                    console.log(arr[i]+","+arr[j]+","+arr[k]); 
                    found = true; 
                } 
            } 
        } 
    }
    if (found == false) 
        console.log("no such triplets exists");
}

let arr= [0,-1,2,-3,1];
console.log("UC4-Triplets which add to zero are:");
findTriplets(arr)

//UC5-Find the numbers which have repeated digits in 0-100
function repeatDigits()
{ 
    const arr1=[];
    for(i=0;i<100;i++){
        var str1 = i.toString();
        if (str1[0]== str1[1])
            arr1.push(str1)
        }
        return arr1;
    
}
console.log("UC5 Repeated Digits :"+repeatDigits()); 