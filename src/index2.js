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