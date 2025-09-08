// const arr = [1,2,3,4,5,true,"uday"]
// console.log(arr);

// arrays of javascript are resizeable, 0 based indexing, arr[0] by this exis element of array.
// when every we make copy of array it makes shallow copy means . --- refers to same adress(that means changes in copy will also be visible in original array)
// now of we want to make copy of array so we have to make deep copy

//_________________________________________ARRAY METHODS_____________________________________________
const Arr = [1,2,3,4]
Arr.push(8)
Arr.push(9)
console.log(Arr);

Arr.pop()
console.log(Arr);

Arr.unshift(9) //it adds value in starting of array.

console.log(Arr);

Arr.shift() //it remove value in starting of array.

console.log(Arr);


console.log(Arr.includes(9)); // it gives boolean result.

const newArr = Arr.join()
console.log(newArr);
console.log(typeof newArr);
console.log(Arr);


///____________________________SLICE AND SPLICE_________________________(DIFFERENCE IN BETWEEN THEM)


const ud = [1,2,3,5,6,7,8]
console.log("A", ud);
console.log(ud.slice(1,3)); // it dose not include last index
console.log(ud.splice(1,3)); // it includes last index
console.log("B", ud)


// ___________ONE MORE MAJOR DIFFERENCE IS --
// splice completely manipulates the original array.

// WHERE AS

// IN slice it dose not original change or manipulates the array.

