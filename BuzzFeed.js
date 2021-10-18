// Если делится только на на 3 то Buzz
// Если делится только на на 5 то Feed
// Если делится и на 3 и на 5 то BuzzFeed

let num = 0;
while (num<101){
if (num %3 == 0 && num %5 !== 0){
console.log("buzz");
}
if(num %5 ==0 && num %3!==0){
console.log("feed");
}
if(num %5 ==0 && num %3==0){
console.log("BuzzFeed");
}
else
console.log(num);
num+=1;
}