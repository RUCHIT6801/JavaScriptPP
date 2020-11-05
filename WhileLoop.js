//Print powers of 2 till 256 is reached
let n =Math.floor((Math.random())*10);
console.log(n);
let a=1;
let i=1;
while( i<n+1 && a<256){
    a=2*a
    i++;
    console.log(a);
}

//Extend Head Tail to reach 11 wins
{
    let heads=0;
    let tails=0;
while(heads<12 && tails<12){
let coin=((Math.floor(Math.random()*10))%2);
if (coin==1){
    heads++;
    console.log("Heads:"+heads);
}else{
    tails++;
    console.log("Tails"+tails);
}
}
console.log("Heads Points:" +heads);
console.log("Tails Points:" +tails);
}