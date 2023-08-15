const board = document.querySelector(".sudoku");

let puzzle1 = [
  [0, 5, 0, 0, 1, 0, 4, 2, 7],
  [9, 0, 0, 0, 5, 0, 6, 8, 0],
  [4, 0, 0, 6, 8, 0, 9, 1, 0],
  [3, 7, 0, 0, 6, 2, 0, 0, 0],
  [8, 0, 0, 4, 0, 0, 0, 0, 2],
  [0, 2, 9, 5, 3, 0, 7, 6, 0],
  [2, 9, 0, 0, 0, 5, 0, 0, 1],
  [0, 8, 0, 0, 2, 0, 0, 4, 9],
  [0, 0, 0, 8, 0, 1, 0, 0, 6],
];

let puzzle2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let puzzle3 = createArray(
  "186..3427.7..41.....5..2..1........2.....6.5.....1...67...852.....4.7.........57."
);

let puzzle4 = createArray(
  ".6........9........73..4..51...3...9..7..5..1..42..8.6.........7................."
);

let puzzle5 = createArray(
  ".78.....9..........4...9......6....8.8.354.7........5.......7....7........17....."
);

let puzzle6 = createArray(
  "428...635....2.......4.3...9....8.2....54..............8.......................73"
);

let puzzle7 = createArray(
  "837529614491637..5.651.837.5.69147.89.875..62374.8659115386..4774239...668947...3"
);

let puzzle8 = createArray(
  "6123.4578397..51428.4172963941236857238759.1.76.418.39...5.3.........3.55.3.2...."
);

let puzzle9 = createArray(
  "4.5......83....27.7.........9.432...2416..5933..159............9.4....3.1........"
);

let puzzle10 = createArray(
  ".1.5..7......9....32..6..4.......3.....72..68.9..............3.......18.........."
);

let puzzles = [
  puzzle1,
  puzzle2,
  puzzle3,
  puzzle4,
  puzzle5,
  puzzle6,
  puzzle7,
  puzzle8,
  puzzle9,
  puzzle10,
];

let isFinished = false;

function pickPuzzle() {
  let puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  return puzzle;
}

let puzzle = pickPuzzle();

function createArray(sudokuString) {
  let sudokuArray = [];
  let row = [];
  for (let i = 0; i < sudokuString.length; i++) {
    if (sudokuString[i] == ".") {
      row.push(0);
    } else {
      row.push(parseInt(sudokuString[i]));
    }
    if (row.length == 9) {
      sudokuArray.push(row);
      row = [];
    }
  }
  return sudokuArray;
}

function markSolved() {
  let cells = document.querySelectorAll(".sudoku__cell");
  cells.forEach((cell) => {
    if (cell.textContent != 0) cell.classList.add("solved");
    if (cell.textContent == 0) cell.classList.remove("solved");
  });
}

function createSudoku() {
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("div");
      if (i == 0 && j == 0) cell.classList.add("sudoku__cell-top-left");
      if (i == 8 && j == 0) cell.classList.add("sudoku__cell-top-right");
      if (i == 0 && j == 8) cell.classList.add("sudoku__cell-bottom-left");
      if (i == 8 && j == 8) cell.classList.add("sudoku__cell-bottom-right");
      cell.classList.add("sudoku__cell");
      cell.setAttribute("id", `${i}${j}`);
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function renderSudoku(puzzle) {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      let cell = document.getElementById(`${i}${j}`);
      cell.textContent = puzzle[i][j];
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sudoku(puzzle) {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  async function solve(puzzle) {
    let empty = isEmpty(puzzle);
    if (!empty) return puzzle;
    let [row, col] = empty;
    for (let i = 0; i < options.length; i++) {
      puzzle[row][col] = options[i];
      if (isValid(puzzle)) {
        renderSudoku(puzzle);
        markSolved();
        await sleep(100);
        let result = await solve(puzzle);
        if (result) {
          isFinished = true;
          return result;
        }
      }
      puzzle[row][col] = 0;
    }
    return false;
  }

  return solve(puzzle);
}

function isEmpty(puzzle) {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] == 0) return [i, j];
    }
  }
  return false;
}

function isValid(puzzle) {
  for (let i = 0; i < puzzle.length; i++) {
    let row = puzzle[i];
    if (!checkArr(row)) return false;
  }
  for (let i = 0; i < puzzle.length; i++) {
    let col = [];
    for (let j = 0; j < puzzle.length; j++) {
      col.push(puzzle[j][i]);
    }
    if (!checkArr(col)) return false;
  }
  for (let i = 0; i < puzzle.length; i += 3) {
    for (let j = 0; j < puzzle.length; j += 3) {
      let box = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          box.push(puzzle[k][l]);
        }
      }
      if (!checkArr(box)) return false;
    }
  }
  return true;
}

function checkArr(arr) {
  let arrCopy = arr.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    let temp = arrCopy[i];
    if (temp == 0) continue;
    arrCopy[i] = 0;
    if (arrCopy.includes(temp)) return false;
    arrCopy[i] = temp;
  }
  return true;
}

function startNewGame() {
  renderSudoku(puzzle);
  markSolved();
  sudoku(puzzle);
}

isFinished = true;

createSudoku();
renderSudoku(puzzle);

setInterval(() => {
  if (isFinished) {
    puzzle = pickPuzzle();
    isFinished = false;
    startNewGame();
  }
}, 1000);

let count = 0;
let temp;
let temp2;

// super hack to check if the puzzle is solved, because isFinished sometimes doesn't work for some reason
setInterval(() => {
  count++;
  if (count % 2 == 1) {
    temp = puzzle.slice().join("").replace(/,/g, "");
  }
  if (count % 2 == 0) {
    temp2 = puzzle.slice().join("").replace(/,/g, "");
  }
  if (temp && temp2) {
    if (temp == temp2) {
      isFinished = true;
    }
  }
}, 5000);
