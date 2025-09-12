// let a = 5; // this has global scope.
// const b = 2;// this also has global scope.
// var c = 3;// this also has global scope.

// console.log(a);
// console.log(b);
// console.log(c);

// yaaha tk tho sari kaahani thik h sab bhadiya h kahani bigadti h jab kahani me aata h ye {} isko scope bhi bolte h

let a = 5; 
const b = 2;
var c = 3;
if(true){
    let a = 10
    const b  = 20
    var c = 30
}
console.log(a);
console.log(b);
console.log(c);

// tabhi jo h ham log var ko ignore kr dete h or jada use nahi krte h.
// kyuki it's dose not have ijjat dogla hota h

// one more important thing, we can use values of global varibales inside the scope.
// but can not use values of scope variables in global, or globally.

