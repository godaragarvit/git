//create a function that takes an array of stringfied numbers as parameter and return an array of numbers
//ex: ["1","3","6.7"] -> [1,3,6.7]

// function parseStringifiedNumbers(arr) {
//     const parsedNumbers = [];
//     arr.forEach(numStr => {
//         const num = parseFloat(numStr); 
//         if (!isNaN(num)) {
//             parsedNumbers.push(num);
//         } else {
//             console.log(`Unable to parse '${numStr}' as a number.`);
//             // You can choose to handle this error differently, like skipping the value
//             // or throwing an exception if needed.
//         }
//     });
//     return parsedNumbers;
// }

// // Example usage:
// const stringifiedNumbers = ["1","3","6.7"];
// const numbers = parseStringifiedNumbers(stringifiedNumbers);
// console.log(numbers)


// let arraytoNumbers = arr => arr.map (e => +e)
// console.log(arraytoNumbers(["1","3","6.7"]))


// //ES5

// function arraytoNumbersTwo(arr) {
//     let temp = []
//     for(let i =0; i < arr.length; i++) {
//         temp[i] = JSON.parse(arr[i])
//     }
//     return temp
// }

// console.log(arraytoNumbersTwo(["1","3","6.7"]))


function arraytoNumbersThree(arr){
    return arr.map(Number)
}

console.log(arraytoNumbersThree(["1","3","6.7"]))