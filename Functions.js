//Temperature Convertor  
    function Conversion(temp,choice){
        switch (choice) {
            case 1:
                console.log("degC to degF")
                if(temp<0||temp>100){
                    console.log("Temperature given is outside the range.Please try again")
                    break;
                }
                fahrenheit=(temp*9/5)+32;
                console.log("Given temp in fahrenheit is :"+fahrenheit);
                break;
        
            default:
                case 1:
                console.log("degF to degC")
                if(temp<32||temp>212){
                    console.log("Temperature given is outside the range.Please try again")
                    break;
                }
                celcius=(temp-32)*5/9;
                console.log("Given temp in celcius is :"+celcius);
                break;
        }
    }

choice=(Math.floor(Math.random()*10))%2;
console.log(choice);
temp=(Math.floor(Math.random()*10));
console.log(temp);
conversion=Conversion(temp,choice);

//Check if given two numbers are palindrome
function checkPalindrome(num1,num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    // find the length of a string
    let len = str1.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str1[i] !== str2[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
a=checkPalindrome(8324,4238);
b=checkPalindrome(1234,4567);
console.log(a);
console.log(b);

//Function to determine if  a number is prime and then check if its palindrome is prime as well

function checkPrime(number){
    for (var d=2;d<number+1;d++){
        if(d==number){
            return true;
        }else if(number%d==0){
             return false;
        }
    }
}

function reverseString(number) {
    var string2 = "";
    var str = number.toString();

    for (var i = str.length - 1; i >= 0; i--) {
        string2 += str[i];
    }
    return string2;
}

function primePalindrome(number){
if (checkPrime(number)){
str2=reverseString(number);
}else{
    return "Given Number "+number+" isn't prime";
}
    if (checkPrime(str2)){
            return "The number "+number+ " as well its palindrome both are prime";
        }else{
            return "The number " +number+" palindrome isn't prime";
        }
        
} 
a=(Math.floor(Math.random()*100));
console.log("Number generated is:" +a);
console.log(primePalindrome(a));


