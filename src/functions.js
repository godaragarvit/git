function greeting() {
    return console.log('Hello World')
}

console.log(greeting())
//NOTE -  write a function that adds any two number and return the result.
function sum(a, b) {
   return a + b
 }

console.log(sum(2, 3))
//write function takes an array check whether the sum of it elements is even or odd, the value should be return "even" or "odd"


function checkArraysum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(checkArraysum([0, 1, 5]))


//SECTION - write a function that an array of items and return only integers.
//['Ali', 3, 'Isaac', 5 , 9] -> [3, 5, 9]

function onlyinteger(arr) {
    let integer = []
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            integer.push(arr[i])
        }
    }
    return integer
}

console.log(onlyinteger(['Ali', 3, 'Isaac', 5 , 9]))
