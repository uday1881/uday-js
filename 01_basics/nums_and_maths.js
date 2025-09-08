const score = 400
console.log(score);

const balance = new Number(100)

console.log(balance)
console.log(typeof balance);

console.log(balance.toFixed(1))

const othernumber = 123.8966
console.log(othernumber.toPrecision(3))

const hundereds = 1000000
console.log(hundereds.toLocaleString())

Number.MAX_VALUE
Number.MAX_VALUE

//______________________________________________MATHS_____________________________________________________
console.log(Math);
console.log(Math.abs(-4))

console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));


console.log(Math.max(1,2,3,4,5));
console.log(Math.min(-1,2,0,4));


console.log(Math.random());   // this always give number in between 0 and 1 // use case suppose we are making dice game so we can modify it for our use

console.log(Math.random()*10+1);
console.log(Math.floor((Math.random()*10))+10);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);



