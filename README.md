# 🎮 Tic-Tac-Toe Game

## 📝 Overview
This is a simple Tic-Tac-Toe game built using React. It features a 3x3 board where two players can take turns marking ❌ and ⭕. The game keeps track of the score for both players and highlights the winning combination when a player wins. It also provides options to reset the board and reset scores.

## ✨ Features
- 🎭 Two-player Tic-Tac-Toe game
- 🔄 Turn-based gameplay with X and O markers
- 🏆 Automatic winner detection with highlighted winning cells
- 📊 Score tracking for both players
- 🔁 Reset board and reset score functionality
- 📱 Responsive design using Tailwind CSS

## 🛠 Technologies Used
- ⚛️ React
- 🎨 Tailwind CSS

## 🚀 Installation and Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 📂 File Structure
```
├── src
│   ├── components
│   │   ├── Board.js  (Main game logic)
│   │   ├── Square.js (Individual cell component)
│   ├── App.js       (Root component)
│   ├── index.js     (Entry point)
│
├── public
│   ├── index.html   (Main HTML file)
│
├── package.json     (Project dependencies)
└── README.md        (Project documentation)
```

## 🎮 Usage
- Click on an empty square to mark ❌ or ⭕.
- The turn alternates between players after each move.
- If a player wins, the winning combination is highlighted.
- Click **🔄 Reset Board** to start a new game.
- Click **🗑 Reset Score** to reset both players' scores.

## 🔥 Upcoming Features
- 🌍 **Multiplayer Mode**: Implement real-time gameplay using Socket.IO.
- 🤖 **AI Opponent**: Add a computer player using the Minimax algorithm.
- 🏅 **Leaderboard**: Track player scores across multiple games.
- 🎨 **Custom Themes**: Allow users to choose different board themes.
- ⏪ **Undo Move Feature**: Enable players to undo their last move.

## 🤝 Contributing
If you want to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make changes and commit (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.



