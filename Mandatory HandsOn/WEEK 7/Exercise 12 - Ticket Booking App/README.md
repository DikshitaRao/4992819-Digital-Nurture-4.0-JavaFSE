# Ticket Booking App
A simple React app that shows different pages for guests and logged-in users. Perfect for learning how to build conditional interfaces!
What does this app do?
For Guests (not logged in):

Browse available flights
See flight details like price and departure time
Can't book tickets (need to login first)

For Logged-in Users:

Everything guests can do, plus:
Actually book tickets
Get booking confirmations
Logout when done

What you'll learn

How to show different content based on user status
Managing login/logout states in React
Building reusable components
Handling user interactions

Quick Start
What you need first

Node.js installed on your computer
A code editor (VS Code, IntelliJ, etc.)

Get it running
bash# Create the app
npx create-react-app ticketbookingapp

# Go into the folder
cd ticketbookingapp

# Start it up
npm start
Then copy the code from the guide above into your files!
How it works
The magic happens in App.js where we check if someone is logged in:
javascript// If logged in, show UserPage. If not, show GuestPage
{isLoggedIn ? <UserPage /> : <GuestPage />}
File Structure (the important stuff)
src/
├── App.js              # Main app logic
├── App.css             # Styles
└── components/
├── GuestPage.js    # What guests see
└── UserPage.js     # What logged-in users see
Features
✅ Login/Logout buttons that actually work
✅ Different views for different users
✅ Flight booking (with fake confirmation)
✅ Clean, simple design
✅ Responsive - works on mobile too
Common Issues & Fixes
App won't start?

Make sure Node.js is installed
Try npm install then npm start

Port 3000 busy?

Close other React apps or use PORT=3001 npm start

Components not updating?

Check your state management
Make sure you're calling the right functions

Want to make it better?
Here are some ideas:

Add a real login form with username/password
Save booking history
Add more flight details
Make it prettier with better CSS
Add loading animations

Need Help?

Check the console for error messages
Make sure all your imports are correct
Restart the development server
Clear your browser cache

The React Concepts You're Learning

Conditional Rendering - Show different things based on conditions
State Management - Keep track of whether user is logged in
Props - Pass data between components
Event Handling - Respond to button clicks
Component Organization - Keep code organized and reusable

That's it! This project is a great way to understand how real apps work - showing different content to different types of users. Once you get this working, you'll have a solid foundation for building more complex React applications.