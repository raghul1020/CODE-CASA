// Game variables
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

// Function to handle moves
function makeMove(index) {
    if (gameEnded || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementById('board').children[index].textContent = currentPlayer;
    
    if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        gameEnded = true;
    } else if (checkTie()) {
        alert("It's a tie!");
        gameEnded = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Function to check for a win
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

// Function to check for a tie
function checkTie() {
    return board.every((cell) => cell !== '');
}

// Function to reset the game board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameEnded = false;
    currentPlayer = 'X';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
}
