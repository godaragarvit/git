//conway's game of life.

function gameoflife(board) {
    let rows = board.length
    let cols = board[0].length
    let newBoard = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            let liveNeighbors = 0
            for(let [x, y] of directions) {
                let newRow = i + x
                let newCol = j + y
                if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] === 1) {
                    liveNeighbors++
                }
            }
            if(board[i][j] === 1) {
                if(liveNeighbors < 2 || liveNeighbors > 3) {
                    newBoard[i][j] = 0
                } else {
                    newBoard[i][j] = 1
                }
            } else {
                if(liveNeighbors === 3) {
                    newBoard[i][j] = 1
                }
            }
        }
    }

    return newBoard
}

console.log(gameoflife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])) //[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
