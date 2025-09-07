// on the basis of keeping data in memory or taking out from memory there are two types = 1-primitive
//                                                                                        2-non primitive  or reference

//primitive- String, Number, Boolean, Symbol(uniqueness), Null, undefined, BigInt(scientefic values)
// these data types are call by value.

//Non primitive(References) - Arrays, object, functions.
// these data types are call by reference.

// In JavaScript, everything is technically passed by value.
//For primitives → the value itself is copied.
//For objects → the reference (memory address) is copied. Both variables then point to the same object, so changes reflect.
//That’s why people casually call it “call by value (for primitives)” and “call by reference (for objects)”.

const id = Symbol('123')
const Nid = Symbol('123')
console.log(id===Nid);

const bigNumber = 34565435766546254n
console.log(typeof bigNumber);

// Array

const heros = ["Shaktiman","Nagraj"];

// object

let Myobj = {
    name: "uday",
    age: 21

}

//functions

const myFunction =  function(){
    console.log("hello world");
}


//to read more
//https://262.ecma-international.org/5.1/#sec-11.4.3

