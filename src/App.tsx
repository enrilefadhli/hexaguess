import React, { useState } from 'react';
import './App.css';
import HelpModal from './components/HelpModal';

// Function to generate a random hex color
const getRandomHexColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Convert hex color to RGB
const hexToRgb = (hex: string): { r: number, g: number, b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

// Calculate the distance between two hex codes
const calculateColorDistance = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const rDiff = rgb1.r - rgb2.r;
  const gDiff = rgb1.g - rgb2.g;
  const bDiff = rgb1.b - rgb2.b;

  // Calculate Euclidean distance
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
};

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Modal state
  const handleOpenModal = () => setModalOpen(true); // Open modal
  const handleCloseModal = () => setModalOpen(false); // Close modal
  const [color, setColor] = useState<string>(getRandomHexColor()); // Store the random hex code
  const [guess, setGuess] = useState<string[]>(['', '', '', '', '', '']); // Store each digit
  const [message, setMessage] = useState<string>(''); // Store message to display
  const [correctHexCode, setCorrectHexCode] = useState<string>(''); // Store the correct hex code
  const [submittedGuessHex, setSubmittedGuessHex] = useState<string>(''); // Store submitted guess
  const [error, setError] = useState<string>(''); // Error message
  const [isGuessSubmitted, setIsGuessSubmitted] = useState<boolean>(false);

  // Combine the guessed digits into a full hex string
  const guessHex = `#${guess.join('')}`.padEnd(7, '#');

  // Handle input change per digit
  const handleDigitChange = (index: number, value: string) => {
    if (/^[0-9A-Fa-f]$/.test(value)) {
      const newGuess = [...guess];
      newGuess[index] = value.toUpperCase();
      setGuess(newGuess);

      // Move to the next input automatically after state is updated
      setTimeout(() => {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }, 0); // Delay focus change until after state update
    }
  };

  // Handle backspace key
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      // If the current input is empty, focus on the previous input
      if (guess[index] === '') {
        const prevInput = document.getElementById(`digit-${index - 1}`);
        if (prevInput) {
          (prevInput as HTMLInputElement).focus();
        }
      } else {
        // If the current input has a value, allow it to be deleted
        setGuess(prev => {
          const newGuess = [...prev];
          newGuess[index] = ''; // Clear current input
          return newGuess;
        });
      }
    } else if (e.key === 'ArrowLeft') {
    const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    } else if (e.key === 'ArrowRight') {
      if (guess[index] !== '') {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
  };

  // Handle click on input to select the digit
  const handleClick = (index: number) => {
    const inputElement = document.getElementById(`digit-${index}`);
    if (inputElement) {
      (inputElement as HTMLInputElement).select(); // Automatically select the digit
    }
  };

  // Handle the submission of the guess
  const handleGuess = () => {
    if (guess.some((digit) => digit === '')) { // Check if any input is empty
      setError('Please fill in all 6 digits.');
      return; // Prevent submission if not all digits are filled
    }

  const distance = calculateColorDistance(guessHex, color);
  setSubmittedGuessHex(guessHex); // Set the submitted guess
  setError('');
  setIsGuessSubmitted(true);

  const threshold = 50;

  if (distance === 0) {
    setMessage('Perfect! You guessed the exact color.');
  } else if (distance <= threshold) {
    setMessage(`Your guess is close!\nDistance: ${distance.toFixed(2)} (zero is the goal).\nThe correct hex code is: ${color}`);
  } else {
    setMessage(`Your guess is too far!\nDistance: ${distance.toFixed(2)} (zero is the goal).\nThe correct hex code is: ${color}`);
  }

    setCorrectHexCode(color);
  };

  // Reset for the next color
  const handleNextColor = () => {
    setColor(getRandomHexColor());
    setGuess(['', '', '', '', '', '']);
    setMessage('');
    setCorrectHexCode('');
    setSubmittedGuessHex('');
    setError('');
    setIsGuessSubmitted(false);
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Guess the Hex Code!</h1>
      <HelpModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="d-flex justify-content-center mb-4">
        <div
          className="color-box"
          style={{
            backgroundColor: color,
            width: '200px',
            height: '200px',
          }}
        ></div>
      </div>
      <div className="hex-input d-flex justify-content-center mb-3">
      <span style={{ fontSize: '32px', marginRight: '5px' }}>#</span>
        {guess.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleDigitChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onClick={() => handleClick(index)}
            className="form-control mx-1 text-center"
            style={{
              width: '45px',
              fontSize: '24px',
            }}
            disabled={isGuessSubmitted}
          />
        ))}
      </div>
      
      {!isGuessSubmitted && <button className="btn btn-secondary mx-3" onClick={handleOpenModal}>
        Need help?</button>
      }

      {!isGuessSubmitted && <button className="btn btn-primary" onClick={handleGuess}>
        Submit Guess
      </button> }

      {error && <p style={{ color: 'red',minHeight: '20px',margin:'20px' }}>{error}</p>}

      {submittedGuessHex && (
        <div className="mt-4">
          <h3>Your Guess:</h3>
          <div
            className="color-box mx-auto"
            style={{
              backgroundColor:
                submittedGuessHex.length === 7 ? submittedGuessHex : 'transparent',
              width: '200px',
              height: '200px',
            }}
          ></div>
        </div>
      )}

      {message && <p style={{ whiteSpace: 'pre-line' }} className="mt-3">{message}</p>}

      {correctHexCode && (
        <button className="btn btn-success" onClick={handleNextColor}>
          Try Next Color
        </button>
      )}
      {/* Footer */}
      <p style={{ margin: '20px 0', textAlign: 'center' }}>Made with 🦙 by <a href="https://www.linkedin.com/in/enrilefadhli/">Enrile</a></p>
    </div>

  );
};

export default App;