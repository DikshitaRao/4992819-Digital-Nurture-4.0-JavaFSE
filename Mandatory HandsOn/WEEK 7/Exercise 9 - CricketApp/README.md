# CricketApp - React Application

This project demonstrates various ES6 features in React including:
- Arrow functions
- Array methods (map, filter)
- Destructuring
- Spread operator for array merging

## Features

1. **ListofPlayers Component**
    - Displays a list of 11 players with their scores
    - Filters and shows players with scores below 70 using arrow functions

2. **IndianPlayers Component**
    - Divides players into odd and even teams using destructuring
    - Merges two arrays (T20players and RanjiTrophyPlayers) using spread operator

3. **Toggle View**
    - Uses a flag state to switch between the two components

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- IntelliJ IDEA (or any code editor)

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   
PROJECT STRUCTURE
cricketapp/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   │   ├── ListofPlayers.js
│   │   └── IndianPlayers.js
│   ├── App.js       # Main application component
│   ├── App.css      # Application styles
│   └── index.js     # Application entry point
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation

## Final Notes

1. The project should now be fully functional with:
    - Toggle button to switch between components
    - ListofPlayers showing all players and filtered players
    - IndianPlayers showing team division and merged lists

2. You can further enhance the project by:
    - Adding more styling in App.css
    - Implementing proper player data management
    - Adding tests for the components
    - Implementing routing for better navigation

3. Estimated time to complete: 45-60 minutes as specified in the lab document.

The project demonstrates all the required ES6 features including arrow functions, array methods (map, filter), destructuring, and spread operator for array merging, while following React best practices.
New chat
