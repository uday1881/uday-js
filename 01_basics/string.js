const name = 'uday'
const repocount = 5
console.log(name + repocount + "value");    // old method practice

// String interpolation new method

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

//this is new mthod mostly used called interpolation we c`an do so many things on  the go like{name.touppercase()} and all.
let Name  = uday

 const gamename = new String(Name) //object creation in for of key value pair 0:u, 1:d and all.

 console.log(gamename[0]);

 console.log(gamename.__proto__);
 console.log(gamename.length);
 console.log(gamename.toUpperCase());
 // similarly there are so many functions/methods the more you know so many methods you will be expert.

 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('2'));

 //few more important method

 const newstring = gamename.substring(0,4)
 console.log(newstring);

 const anothertring = gamename.slice(-8,4)
 console.log(anotherstring);

 const trimstr = "      ud  "
 console.log(trimstr);
 console.log(trimstr.trim());


 //javascrpit mdm  more to know about methods  there is trimstart, and trimend also.

 const url = "https://uday.com/uday%20dixit"

 console.log(url.replace('%20','-'));

 console.log(url.includes(uday));

//  console.log(gamename.split('-'));


