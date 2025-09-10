//now talking how to make singleton object
//const tinderuser = new Object() //this is singleton object

const tinderuser = {} // this is non singleton object

tinderuser.id = "123abc"
tinderuser.name = "uday"
tinderuser.isLoggedIn = false
console.log(tinderuser);


const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Uday",
            lastname : "Dixit"

        }
    }
}
console.log(regularuser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"} ///combime both objects

const obj3 = {obj1,obj2}// this is not right way to combine objects it wil give object in side object.
console.log(obj3);

//correctway to combine objects.

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);

// another way just spred the objects and then combine

const obj5 = {...obj1,...obj2}
console.log(obj5)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'))
