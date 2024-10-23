<<<<<<< HEAD
# 🎨 Hexaguess : Guess the Hex Code

## Overview

**Hexaguess** is a fun web-based game where players try to guess the hex code of a randomly displayed color. After submitting a hex code guess, the game calculates the distance between your guess and the actual color. Your goal is to get as close to the correct hex code as possible.

The game is built with **React.js** and uses a combination of RGB color space and distance measurement to determine how close your guess is to the actual color.

---

## 🎮 How to Play

1. When the game starts, a random color is displayed in a color box.
2. You'll need to enter a 6-character hex code representing the color.
3. After submitting your guess, the game will calculate the distance between your guess and the actual color.
4. The closer the distance is to **0**, the better your guess!

---

## 🌈 What is a Hex Code?

A **hex code** is a way to represent colors using a 6-character string made up of numbers (`0-9`) and letters (`A-F`). Each pair of characters represents the intensity of **red**, **green**, or **blue** (RGB), which combine to form a color.

For example:
- `#FF0000` = Red
- `#00FF00` = Green
- `#0000FF` = Blue
- `#FFFFFF` = White
- `#000000` = Black

---

## 🚀 Features

- Guess the color based on the displayed hex code.
- Calculates the distance between your guess and the actual color.
- Automatic input focusing and user-friendly interactions.
- "Help" button to assist players with hex codes.
- Built-in backspace and arrow key functionality to navigate inputs.

---

## 🔧 Tech Stack

- **Frontend**: React.js
- **Styling**: Bootstrap (via CDN)
- **Color Distance Calculation**: RGB distance formula to measure closeness between guessed and actual colors.

---

## 💻 Getting Started

### Prerequisites

- You’ll need **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/guess-the-hex.git
    cd guess-the-hex
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to start playing!

---

## 🎯 How it Works

The core functionality of the game revolves around the RGB color model, where each hex color can be broken down into red, green, and blue components. The game measures the **distance** between your guess and the target color by comparing the RGB values.

The distance between two colors is calculated using a simple mathematical formula that sums the absolute differences between the red, green, and blue values of the guessed and actual colors. The closer the distance is to zero, the better the guess!

---

## 📚 Learn More

If you’d like to learn more about hex codes, check out these resources:
- [Color Hex](https://www.color-hex.com)
- [What is RGB and Hex?](https://www.w3schools.com/colors/colors_rgb.asp)

---

## 🛠️ Future Improvements

- Add a timer for each round to increase difficulty.
- Add a scoreboard for players to track their progress over time.
- Implement different levels of difficulty by showing progressively more complex colors.

---

## 🙌 Acknowledgements

- Built with ❤️ by [Enrile Fadhli Fahrezi](https://www.linkedin.com/in/enrilefadhli/).
- Thanks to the open-source community for inspiration and resources.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 2465c56 (Initialize project using Create React App)
