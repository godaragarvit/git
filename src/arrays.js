//SECTION - JAVA SCRIPT ARRAY 

//NOTE - ARRAYS ARE A SPECIAL TYPE OF OBJECT IN JS THAT CAN ACCESSED THROUGH NUMBERS FROM ZERO UP TO N-1
let arr = []

arr = ['ali', 1, 'food', 100]
console.log(arr[2])
//NOTE - push() pop()
//SECTION - push() adding elements to the end of the array
arr.push('Garvit')
console.log(arr)

//SECTION - pop() removing elements from the end of the array

let lastitem = arr.pop()
console.log(lastitem)
console.log(arr)

//ANCHOR - javascript for loop, the best way to literate through a for loop
console.log(arr.length)
for(let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}

//SECTION - add an item to the beginning of the array
arr.unshift('apples')
console.log(arr)

//NOTE - remove an item from the beginning of the array
let firstitem = arr.shift() 
console.log(firstitem)
console.log(arr)

//ANCHOR - javascript itrators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method is used to merge two or more arrays.
let result = a.concat(c, b)
console.log(result)

let numbers = [2, 4, 7, 8, 9]

let isEven = (number) => {
    if(number % 2 == 0) {
        // console .log(number +` is even`)
        return
    } else {
        // console.log(number + ` is odd`)
        return false
    }
}

// console.log(isEven(numbers))
//
// console.log(numbers.every(isEven))

// console.log(numbers.some(isEven))

for (let j = 0; j < numbers.length; j++) {
let temp = numbers[j]
if (temp % 2 == 0) {
console.log(temp + ` is even`)
} else {
console.log(temp + ` is odd`)                                                                                                                                                                                                                                                                                                                        
}}
