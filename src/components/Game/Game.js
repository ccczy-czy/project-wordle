import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, SetGuessResults] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED)
  );

  const [guessCount, SetGuessCount] = React.useState(0);

  return (
    <>
      <GuessResults guessResults={guessResults}></GuessResults>
      <GuessInput
        guessResults={guessResults}
        SetGuessResults={SetGuessResults}
        guessCount={guessCount}
        SetGuessCount={SetGuessCount}
        answer={answer}
      ></GuessInput>
    </>
  );
}

export default Game;
