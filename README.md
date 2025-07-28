# Kenny's React Arcade - ProjectG

![Project Banner](https://via.placeholder.com/1200x400?text=Kenny's+React+Arcade+Banner)

**A portfolio of interactive React applications by Kalisa Ndoli Kenny**

## Project Overview

Kenny's React Arcade is a collection of three engaging applications built with React that demonstrate modern web development techniques. This project showcases a responsive design, efficient state management, and a polished user experience with full dark mode support.

## Features

### 🎲 Tenzi Game

- Roll dice until all show the same value
- Click to freeze dice between rolls
- Win detection with celebration
- Smooth animations and responsive design

### 📝 Notes App

- Create, edit, and delete notes
- Automatic saving to local storage
- Date tracking for each note
- Clean card-based interface

### ❓ Quiz App

- Multiple-choice questions with selection
- Score calculation and results display
- Correct answer highlighting
- Play again functionality

### ✨ Additional Features

- **Full-Screen Dark Mode** toggle across all apps
- Smooth transitions between themes
- Consistent UI design throughout
- Responsive layout for all devices
- User preference saved in localStorage

## Technologies Used

- React 18
- React Router 6
- Context API for state management
- CSS3 with custom properties
- LocalStorage for data persistence
- JavaScript ES6+
- Vercel for deployment

## Installation Guide

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/kenny2033/projectg.git
cd projectg
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit:

```
http://localhost:3000
```

## Project Structure

```
src/
├── components/
│   ├── Home.js              # Home page with app navigation
│   ├── TenziGame.js         # Tenzi game logic and UI
│   ├── Die.js               # Individual die component
│   ├── NotesApp.js          # Notes application
│   ├── Note.js              # Individual note component
│   ├── QuizApp.js           # Quiz application
│   └── Question.js          # Quiz question component
├── context/
│   └── DarkModeContext.js   # Dark/light mode context
├── App.js                   # Main application component
├── index.js                 # Entry point
└── App.css                  # Global styles
```

## How to Use

1. **Home Page**:

   - Click on any of the three app buttons to navigate
   - Toggle between dark/light mode using the button in the top-right corner

2. **Tenzi Game**:

   - Click "Roll" to roll unfrozen dice
   - Click individual dice to freeze/unfreeze them
   - Win when all dice show the same value
   - Click "New Game" to start over

3. **Notes App**:

   - Type your note in the text area
   - Click "Add Note" to save
   - Click "Delete" on any note to remove it
   - Notes are automatically saved to your browser

4. **Quiz App**:
   - Click "Start Quiz" to begin
   - Select an answer for each question
   - Click "Check Answers" to see your score
   - Click "Play Again" to restart the quiz

## Live Demo

Experience the application live:  
[projectg-kalisa.vercel.app](https://projectg-kalisa.vercel.app)

## Technical Highlights

- **Theme Management**: Implemented a context-based dark/light mode system with localStorage persistence
- **Game Logic**: Developed custom dice rolling and win detection algorithms
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Performance Optimization**: Efficient state management with React hooks
- **User Experience**: Smooth transitions and intuitive interfaces

## Screenshots

| Home Page                                                        | Tenzi Game                                                         | Notes App                                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![Home Page](https://via.placeholder.com/300x200?text=Home+Page) | ![Tenzi Game](https://via.placeholder.com/300x200?text=Tenzi+Game) | ![Notes App](https://via.placeholder.com/300x200?text=Notes+App) |

| Quiz Start                                                         | Quiz Questions                                                             | Quiz Results                                                           |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Quiz Start](https://via.placeholder.com/300x200?text=Quiz+Start) | ![Quiz Questions](https://via.placeholder.com/300x200?text=Quiz+Questions) | ![Quiz Results](https://via.placeholder.com/300x200?text=Quiz+Results) |

## Future Improvements

- Add user authentication system
- Implement cloud sync for notes
- Add difficulty levels to Tenzi game
- Integrate with external quiz API for dynamic questions
- Add animations and micro-interactions
- Implement PWA features for offline use
- Add score tracking and leaderboards

## About the Developer

**Kalisa Ndoli Kenny** is a passionate software developer specializing in React, JavaScript, and modern web technologies. With a focus on clean code and intuitive user experiences, Kenny builds applications that solve real-world problems while providing engaging interfaces.

---

**Kenny's React Arcade** © 2025 Kalisa Ndoli Kenny. All rights reserved.
