import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const SnakeGame = () => {
  const [score, setScore] = useState(0);
  const [gameInterval, setGameInterval] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [food, setFood] = useState({ x: 10, y: 5 });
  const [snake, setSnake] = useState([
    { x: 10, y: 12 },
    // ... rest of the initial snake positions
  ]);
  const [direction, setDirection] = useState('up');

  const startGame = () => {
    // hide start button
    // You can use state to handle visibility in React
    // e.g., setStartButtonVisible(false);
    
    // start game
    setGameStarted(true);
    setGameInterval(setInterval(moveSnake, 50));
  };

  const startAgain = () => {
    // Show start button
    // e.g., setStartButtonVisible(true);
    
    // Hide game over
    // e.g., setGameOver(false);
    
    // Reset game data
    setGameStarted(false);
    setGameOver(false);
    restartScore();
    setFood({ x: 10, y: 5 });
    setSnake([
      { x: 10, y: 12 },
      // ... rest of the initial snake positions
    ]);
    setDirection('up');

    // Clear game interval
    clearInterval(gameInterval);
    render();
  };

  // ... rest of the methods

  // useEffect to handle keydown event and window resize
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameStarted) {
        switch (event.keyCode) {
          case 37:
            if (direction !== 'right') {
              setDirection('left');
            }
            break;
          case 38:
            if (direction !== 'down') {
              setDirection('up');
            }
            break;
          case 39:
            if (direction !== 'left') {
              setDirection('right');
            }
            break;
          case 40:
            if (direction !== 'up') {
              setDirection('down');
            }
            break;
        }
      } else {
        switch (event.keyCode) {
          case 32:
            if (gameOver) {
              startAgain();
            } else {
              startGame();
            }
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const handleResize = () => {
      render();
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [gameStarted, gameOver, gameInterval, direction]);

  useEffect(() => {
    render();
  }, [snake, food]);

  // ... rest of the JSX return
};

export default SnakeGame;
