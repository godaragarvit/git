//create a function that takes an array and return types of teh elements ( data types ) in a new array 

//ex: arrTypes([1, 3, "Ali", []]) -> ["number", "number", "string", "object"]	


//  function arrTypes(arr) {
//     let newArray= []
//     for(let i = 0; i < arr.length; i++){
//         newArray[i] = (typeof arr[i])
//     }
//     return newArray
//  }

//  console.log(arrTypes([1, 3, "Ali", []]))




//     // ES6
//     const arrTypesNew = arr => arr.map(x => typeof x)


    //In JavaScript, the map() method is used to create a new array by applying a callback function to each element 
    //of an existing array. This method doesn't modify the original array, but instead returns a new array containing 
    //the results of applying the callback function to each element of the original array.


// create a function that takes 2-D arrays and returns the sum on min valuesw in each row
/*
ex: sumMinArrays([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
])
    output -> 1+6+11 = 18

 */

// function sumMinArrays(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         let y = arr[i][0]
//         for(let x = 0; x < arr[i].length; x++){
//             if(y > arr[i][x]) {
//                 y = arr[i][x]
//             }
//     }
//     sum += y
//     // sum = sum + y
    
//     }
//     return sum
// }

// console.log(sumMinArrays([ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15] ]))

// //es6
// const sumMinArraysNew = arr => arr.reduce((a,b) => a + Math.min(...b), 0)


//create a function that takes an array and return duplicate numbers in new array
//ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [1,5]

//ES5


// function ArrayDuplicateNumbers(arr) {
//     let newArray = []
//     for(let i = 0; i < arr.length; i++){
//         for(let x = i + 1; x < arr.length; x++){
//             if(arr[i] === arr[x]){
//                 newArray.push(arr[i])
//             }
//         }
//     }
//     return newArray
// }

// console.log(ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]))


// const ArraysDuplicateNumbers = arr => {
//     arr = [...new set ([...arr.filter(num => {
//         arr.indexOf(num) !== arr.lastIndexOf(num)
// })])] .sort((a,b) => a - b)
// arr.length ? arr : null
// }


// console.log(ArraysDuplicateNumbers([1,2,3,4,5,6,1]))

//create a function that takes an array of numbers or letters and return a string.
// arrTostring([6,7,"Ali", "Sonny", 10]) -> ""

// function arrTostring(arr) {
//     let result = ""
//     for(let i = 0; i < arr.length; i++){
//         result = result + arr[i]
//     }
//     return result       
// }

// console.log(arrTostring([6,7,"Ali", "Sonny", 10]))

//create a function that takes an array with numbers, transform that array into a mirror.
//arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]

// function arrayToMirror(arr) {
//     for(let i = arr.length - 2; i >= 0; i--){
//         arr.push(arr[i])
//     }
//     return arr
// }

// console.log(arrayToMirror([0,2,4,6,8]))

// //ES6
// const arrayToMirrorNew = arr => [...arr, ...arr.slice(0, -1).reverse()]
// console.log(arrayToMirrorNew([0,2,4,6,8]))

// const ToMirror = arr => arr.filter(number.isInteger)
// console.log(ToMirror([0,2,4,6,8]))

//create a function that returns the total number of arrays inside a given main array.
//totalOfArrays([1,2,3],[4,5,6]) output -> 2

// function totalOfArrays(arr) {
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             count++
//         }
//     }
//     return count
// }

// console.log(totalOfArrays([[1,2,3],[4,5,6],10,[]]))


//create a function that taes a number as an argument and returns an array of numbers
//countding down from the given number to zero


//EWx: arraycountdown(5) -> [5,4,3,2,1,0]

// function arraycountdown(num) {
//     let arr = []
//     for(let i = num; i >= 0; i--){
//         arr.push(i)
//     }
//     return arr
// }

// console.log(arraycountdown(5))

//ES6

// const arraycountdown = num => {
//     return Array.from({length: num + 1}, (_, i) => num - i)
// }   
// console.log(arraycountdown(5))

const countdownarray = (num) => Array.from(Array(num+1).keys()).reverse()
console.log(countdownarray(10))


//Create a function that takes two numbers and a math operator (+,-,/,*) and will perform a calculation with the given numbers.
//cal(2,"+",3) the output is 5.

