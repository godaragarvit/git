//Create a function that takes two numbers and a math operator (+,-,/,*) and will perform a calculation with the given numbers.
//cal(2,"+",3) the output is 5.

// function calNum(num1, operator, num2) {
// if(operator =='+') return num1+num2
// if(operator =='-') return num1-num2
// if(operator =='*') return num1*num2
// if(operator == '/' && num2 !=0) return num1/num2
// else return "can not divide by 0!"
// }

// console.log(calNum(2,"+",3))
// console.log(calNum(2,"-",3))
// console.log(calNum(2,"*",3))
// console.log(calNum(2,"/",3))

// Re-write the code above in ES6 syntax

// const calNum2 = (num1, operator, num2) => operator+num2 === "/0" ? "can not divide by 0!" : eval(num1+operator+num2)

// console.log(calNum2(2,"+",3))
// console.log(calNum2(2,"-",3))
// console.log(calNum2(2,"*",3))
// console.log(calNum2(0,"/",0))


//use switch statement

function calNum3(num1, operator, num2) {
    switch(operator) {
        case "+":
         num1+num2
         break;
        case "-":
            num1-num2
            break;
        case "*":
            num1*num2
            break;
        case "/":
            if(num2 === 0) "can not divide by 0!" 
            return num1/num2
    }
    return null
}

console.log(calNum3(2,"+",3))
console.log(calNum3(2,"-",3))
console.log(calNum3(2,"*",3))
console.log(calNum3(0,"/",0))

// const calNum3 = (num1, operator, num2) => {
//     switch(operator) {
//         case "+":
//             return num1+num2
//         case "-":
//             return num1-num2
//         case "*":
//             return num1*num2
//         case "/":
//             return num2 === 0 ? "can not divide by 0!" : num1/num2
//         default:
//             return "Invalid operator"
//     }
// }

// console.log(calNum3(2,"+",3))
// console.log(calNum3(2,"-",3))
// console.log(calNum3(2,"*",3))
// console.log(calNum3(0,"/",0))


//create an array rotate the values clockwise by one
//the last value is going to be the first value
//rotate([20,15,26,22,30]) output -> [30,20,15,26,22]

function rotateArray(arr) {
    let lastValue = arr.pop()
    arr.unshift(lastValue)
    return arr
}	

// console.log(rotateArray([20,15,26,22,30]))

const rotateArray2 = arr => (arr.unshift(arr.pop()), arr)

console.log(rotateArray2([20,15,26,22,30]))

//create function that takes a given date (3/26/2024) and return the day of the week 
//as string assume that the week starts on sunday.

function getDayName(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date(day)
    return days[date.getDay()]
}

const getDayName2 = day => new Date(day).toLocaleDateString('en-US', {weekday: 'long'})

console.log(getDayName('2024-3-26'))


//create a function that can take a flat array and change it to a nest arrays to represent an incremental depth level


//Ex nestArray([1,2,6,3]) -> [1,[2,[6,[3]]]]

function nestArray(array) {
    let result =[]
    for(let i = array.length - 1; i >= 0; i--) {
        result = [array[i], result]
    }

    return result
}


console.log(nestArray([1,2,6,3]))


//create a function that takes two dates and return the number of days between the first and second date
/* get numbers(
    new Date("March 26, 2024"),
    new Date("March 30, 2024")
)*/ //output -> 4days

//es6 (provide inline comments for the code)
const getdays = (date1, date2) => {
    return new Date(date2 - date1).getDate() - 1
}

console.log(getdays(new Date("March 26, 2024"), new Date("March 30, 2024")))
