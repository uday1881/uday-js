let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);
//Date is of type object in javascript.

let myCreatedDate = new Date(2025,0,25);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); // by dividing by 1000 will convert it into seconds

let newDate = new Date();

console.log(newDate.getMonth()+1);

console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

// newDate.toLocaleString('default', {
//     weekday: "long",
// })




