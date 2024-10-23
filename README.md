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
