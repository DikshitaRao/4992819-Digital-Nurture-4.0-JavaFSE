Project Overview
This React application demonstrates fundamental JSX concepts by creating an office space rental listing platform. The app displays multiple office spaces with their details, including images, addresses, and rent prices with conditional styling based on price ranges.

Features
Dynamic Office Space Listings: Displays office spaces with name, image, address and rent

Conditional Styling: Rent prices below ₹60,000 appear in red, others in green

Responsive Design: Grid layout adapts to different screen sizes

Modern UI: Clean cards with subtle shadows and rounded corners

Image Display: Shows office space images with proper aspect ratio

Technologies Used
React 18: JavaScript library for building user interfaces

JSX: Syntax extension for JavaScript used with React

CSS-in-JS: Inline styling with JavaScript objects

ES6+ Features: Arrow functions, template literals, array methods

Create React App: Bootstrapped with CRA for zero-config setup

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/officespacerentalapp.git
cd officespacerentalapp
Install dependencies:
bash
npm install
Set up environment (if needed):

bash
cp .env.example .env
Running the Application
Start the development server:

bash
npm start
This will:

Start the app in development mode

Open http://localhost:3000 in your default browser

Enable hot reloading for immediate feedback during development

For production build:

bash
npm run build
Project Structure
text
officespacerentalapp/
├── public/                  # Static files
│   ├── index.html           # Main HTML template
│   └── ...                  
├── src/
│   ├── data/                # Data files
│   │   └── officeSpaces.js  # Office space data
│   ├── App.js               # Main application component
│   ├── index.js             # Application entry point
│   └── ...                  
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation