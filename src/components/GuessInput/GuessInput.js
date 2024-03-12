import React from 'react';

import { checkGuess } from '../../game-helpers';

function GuessInput({
  guessResults,
  SetGuessResults,
  guessCount,
  SetGuessCount,
  answer,
}) {
  const [guess, SetGuess] = React.useState('');
  const [win, SetWin] = React.useState(false);
  const [lose, SetLose] = React.useState(0);

  const handleSubmit = (event) => {
    const checkedGuess = checkGuess(guess, answer);
    event.preventDefault();
    if (guessCount < guessResults.length) {
      const newGuessResults = guessResults.toSpliced(
        guessCount,
        1,
        checkedGuess
      );
      SetGuessCount(guessCount + 1);
      SetGuessResults(newGuessResults);
      SetWin(checkWin(checkedGuess));
      SetLose(lose + 1);
    }
    SetGuess('');
  };

  const checkWin = (checkedGuess) => {
    for (const letterObj of checkedGuess) {
      if (letterObj.status !== 'correct') return false;
    }
    return true;
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          maxLength={5}
          minLength={5}
          pattern=".{5,5}"
          value={guess}
          disabled={win || lose === 6}
          onChange={(event) => SetGuess(event.target.value.toUpperCase())}
        />
      </form>
      <div style={{ background: 'blue', height: '500px', width: '100%' }}></div>
      {win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessCount} guesses</strong>.
          </p>
        </div>
      )}

      {lose === 6 && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessInput;
