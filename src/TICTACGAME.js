//ES6

//Environment Setup for the tic tac toe game

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]
    return {board}
})()

const displayController = (() => {
    let board = gameBoard.board
    console.log(board)
})()

const Player = (name, mark) => {
    return {name, mark}
}

const player1 = Player('Garvit', 'X')
const player2 = Player('John', 'O')

console.log(player1.name)
console.log(player2.mark)




