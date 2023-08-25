# Sudoku Solver with Backtracking

## Description

This is a sudoku solver written in Javascript. It uses a backtracking algorithm to solve the sudoku puzzle.
It was done for fun and to learn more about backtracking algorithms. It is slowed down so you can see how it works.

## 🚀 Live Demo

Check out the live demo [here](https://sudoku-solver-teal.vercel.app/).

## 🛠️ Setup and Run Locally

### Prerequisites

- Any modern web browser (e.g., Chrome, Firefox, Safari).

### Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-github-username/sudoku-solver.git
   ```
2. **Navigate into the Directory:**
   ```bash
   cd sudoku-solver
   ```
3. **Open the Application:**
   ```bash
   open index.html with your browser or with live server
   ```

The application should open in your browser. It automatically starts solving picked sudoku puzzle. When it finishes, it will pick another puzzle and solve it. There is 10 puzzles in total which are picked randomly.

### Not a lot of commits

This project has not a lot of commits because I didn't plan to make it public. I just wanted to solve a sudoku puzzle and I thought it would be fun to write a program to do it for me. I didn't even use git for this project, I just uploaded it to github to host it and later did some changes that solved issues.

### 💡 Features

- **Backtracking Algorithm:** Employs a backtracking algorithm for accuracy and efficiency.
- **Mobile Responsive:** Designed for both desktop and mobile users.
- **Dark Mode:** Dark mode by default without option to change so your eyes are safe.

### 🧰 Technologies Used

- **HTML5**
- **CSS3**
- **Javascript**

### 📐 How it works

The backtracking algorithm is a brute-force search algorithm that tries possible configurations and, if it finds a configuration that doesn't work, undoes the last step (backtracks) to try a different path. This is especially effective for problems like Sudoku, where determining the correct sequence of numbers can be complex.

### 📝 License

This project is licensed under the MIT License, feel free to use this project as you please.

### 🙏 Acknowledgements

Special thanks to the open-source community for providing insights and patterns for Sudoku solving algorithms.
Vercel for the impeccable hosting service.
