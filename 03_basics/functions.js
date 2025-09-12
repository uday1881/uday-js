//functions.

// what is function? when we have to perform somethinga again and again somewhere then we make function of it.

// it's simple line of codes packed in one packagenis function and can be used anywhere in code.

// example

function myname(){
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("Y");
}
myname()


function addTwoNumber(number1, number2){
    console.log(number1+number2);
}
addTwoNumber()
addTwoNumber(3,4)
addTwoNumber(3,'4')
addTwoNumber(3,'a') // this will give problem cause there is no check inside function.
const result = addTwoNumber(3,5);
console.log("result is :", result); // it will not give anything beacuse our function is not returning anthing it's just printing.

function addTwoNumber2(number1,number2){
    return (number1+number2)
}
const res = addTwoNumber2(3,6);
console.log("result is:", res);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("uday")); // need quotes around "uday"


//now passing object in function

const user = {
    name: "uday",
    price: 199
}
function bundleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
bundleobject(user);


// now passing array in function

const myArray = [10, 20, 30, 40];

function handleArray(anyarray){
    // printing first element of array
    console.log(`First element is: ${anyarray[0]}`);
    // printing length of array
    console.log(`Array length is: ${anyarray.length}`);
}
handleArray(myArray);
