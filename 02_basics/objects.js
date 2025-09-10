// singleton --> when ever we make using with constructor the singleton forms
// constructor method is like --object.create

const mysym = Symbol("key1") /// this we have maded symbol out of object

const JSuser = {
    name : "uday",
    age : 18,
    location : "fatehgarh",
    email : "uday@gmail.com",
    isLoggin : false,
    lastlogindays : ["monday",["saturday"]],
    [mysym] : "mykey1" // and this we have maded object inside object
}

console.log(JSuser.email); // we will use to acess this way most of the time
console.log(JSuser["email"]); // but sometimes we will also use this way to acess thing. 

JSuser.email = "uday18@gmail.com"
Object.freeze(JSuser)
JSuser.email = "uday@1881@gmail.com" // it will not get changged because freezer is alreay applied there.
console.log(JSuser);

JSuser.gretting = function(){
    console.log("hello JS user");
}

console.log(JSuser.gretting());

JSuser.grettingtwo = function(){
    console.log(`Hello JSuser, ${this.name}`);
}

console.log(JSuser.grettingtwo());
