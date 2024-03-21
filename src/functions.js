// function greeting() {
//     return console.log('Hello World')
// }

// console.log(greeting())
// //NOTE -  write a function that adds any two number and return the result.
// function sum(a, b) {
//    return a + b
//  }

// console.log(sum(2, 3))
// //write function takes an array check whether the sum of it elements is even or odd, the value should be return "even" or "odd"


// function checkArraysum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     if (sum % 2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(checkArraysum([0, 1, 5]))


// //SECTION - write a function that an array of items and return only integers.
// //['Ali', 3, 'Isaac', 5 , 9] -> [3, 5, 9]

// function onlyinteger(arr) {
//     let integer = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Number.isInteger(arr[i])) {
//             integer.push(arr[i])
//         }
//     }
//     return integer
// }

// console.log(onlyinteger(['Ali', 3, 'Isaac', 5 , 9]))


//SECTION - write a function that takes an array with numbers and return an array with the elements multiplied by 2.
//arrayBytwo([2, 5, 4]) -> [4, 10, 8]


// function arrayBytwo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2
//     }
//     return arr
//     }
    //one line
    // const onelineArray = (arr) => arr.map(el => el * 2)
    // console.log(onelineArray([2, 5, 4]))

// console.log(arrayBytwo([2, 5, 4]))

//Create a function which takes two string (p1 and p2) as arguments and returns a string  stating the winner (rock, paper, or scissors)

//NOTE - Game conditions
//if p1 wins return the string "The winner is p1"
//if p2 wins return the string "The winner is p2"
//if it's a draw return the string "It's a draw"
//rp is rock paper scissors


// //function rps(p1, p2) {
//     if (p1 === p2) return 'Its a draw'

//     else if (p1 === 'rock' && p2 === 'scissors' ) return 'The winner is p1' 
//     else  if (p1 === 'paper' && p2 === 'rock' ) return 'The winner is p1'
//     else if (p1 === 'scissors' && p2 === 'paper') return 'The winner is p1'
//     else {
//         return "The winner is p2"
//     }
// }
//console.log(rps('rock', 'rock')) 


//ANCHOR - ES6 javascript.

function rpsTwo(p1, p2) {
    
let obj = {
    rock : 'scissors',
    scissors : 'paper',
    paper : 'rock'
}
return p1 === p2 ? 'Its a draw' : obj[1] === p2 ? "The winner is p1" : "The winner is p2"
}

//ANCHOR - JS  built in function includes()

function rpsThree(p1, p2) {0
    const wins = ['rockscissors', 'scissorspaper', 'paperrock']
    /*

    */
    return p1 === p2 ? "Its a draw" : `The winner is ${wins.includes(p1 + p2) ? 'p1 ' : 'p2'}`
}



