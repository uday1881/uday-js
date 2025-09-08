const marvel_hero = ["thor","Ironman","spiderman"]
const dc_hero = ["superman","flask","batman"]

// push -> it will push the whole array inside the main array
marvel_hero.push(dc_hero)
console.log(marvel_hero); 

// concat -> it will give a new array with all the elements of both arrays
const allheros = marvel_hero.concat(dc_hero) 
console.log(allheros);

// ___________________________ // spread ___________________________________________

// spread -> expands elements from both arrays into a new one
const all_new_heros = [...marvel_hero, ...dc_hero]
console.log(all_new_heros);

// flat(give depth) -> it basically converts nested arrays into a simple array
// Example: from ([1,2,3,4,[5,6,7,8],[9,10,[11,12,13]]]) to a flat array

const wfarray = [[1,2,3,4,[5,6,7,8],[9,10,[11,12,13]]]]  


// now after using flat
const farray = wfarray.flat(Infinity)
console.log(farray);

// Array.isArray -> checks if the given input is an array
console.log(Array.isArray("uday"));   // false

// Array.of -> creates a new array from the given arguments
console.log(Array.of("uday"));        // [ 'uday' ]
