import React from 'react';
import Guess from '../Guess';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guessResult, index) => (
        <Guess key={index} guess={guessResult}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
