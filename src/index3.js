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


// function arraytoNumbersThree(arr){
//     return arr.map(Number)
// }

// console.log(arraytoNumbersThree(["1","3","6.7"]))


//create a function that return (true) if all parameters are truthy and (false) otherwise.
//EX. Checkparam(true,true,true) -> true
//Checkparam(5,1,3,0) -> false
//Falsy values are : false, 0 and "" (empty string)

// function checkParam(...params) {
//     return params.every(Boolean)
// }

// console.log(checkParam(true,true,true))
// console.log(checkParam(5,1,3,0))

//ES5

// function checkparam(arr) {
//     let value = false
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !==0 && arr[i] !== "" && arr[i] !== false) {
//             value = true
//         } 
//             return value

//         }

//     }

// console.log(checkparam([true,true,true]))
// console.log(checkparam([5,1,3,0]))


function checkParam(...parameters) {
    return parameters.every(Boolean)
}

// console.log(checkParam(true,true,true))
// console.log(checkParam(5,1,3,0))


//ES6

const checkparam2=(...args) => args.every(Boolean)

// console.log(checkparam2(true,true,true))
// console.log(checkparam2(5,1,3,0))


//ES5

function checkparam3(param1, param2, param3, param4) {
    if(param1 && param2 && param3 && param4) {
        return true
    } else {
        return false
    }
}

// console.log(checkparam3(true,true,true,true))
// console.log(checkparam3(5,1,3,0))


//create a function to check if an array contains a particular number
//EX: checkArray([5,5,6], 5) -> true
//Ex: checkArray([1,3,5,7,10], 2) -> false


function checkArray(arr, num) {
    return arr.includes(num)
}

// console.log(checkArray([5,5,6], 5))
// console.log(checkArray([1,3,5,7,10], 2))

//ES5

function checkArray2(arr,num) {
    if(arr.includes(num)) {
        return true
    
    } else {
        return false

}
}

// console.log(checkArray2([5,5,6], 5))
// console.log(checkArray2([1,3,5,7,10], 2))

function checkArray3(arr,x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return true
        }
    }
    return false
}

console.log(checkArray3([5,5,6], 6))
console.log(checkArray3([1,3,5,7,10], 2))