import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  let cells = range(0, 5).map((index) => (
    <span key={index} className="cell"></span>
  ));

  if (isNaN(guess)) {
    cells = guess.map((letterObj, index) => (
      <span key={index} className={`cell ${letterObj.status}`}>
        {letterObj.letter}
      </span>
    ));
  }

  return <p className="guess">{cells}</p>;
}

export default Guess;
