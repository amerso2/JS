// Если делится только на на 3 то Buzz
// Если делится только на на 5 то Fizz
// Если делится и на 3 и на 5 то BuzzFeed

let num = 0;
while (num<101){
if (num %3 == 0 && num %5 !== 0){
console.log("Buzz");
}
if(num %5 ==0 && num %3!==0){
console.log("Fizz");
}
if(num %5 ==0 && num %3==0){
console.log("BuzzFizz");
}
else
console.log(num);
num+=1;
}