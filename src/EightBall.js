import React, { useState } from 'react';
import { randomAnswer } from './helpers';
import './EightBall.css';
import ResetButton from './ResetButton';
import Colors from './Colors';

function EightBall() {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  const initialColorCount = {
    goldenrod: 0,
    red: 0,
    green: 0
  }

  const [colorsCount, setColorsCount] = useState(initialColorCount);
  const { goldenrod, red, green } = colorsCount;

  const style = {
    'backgroundColor': color
  };
  
  function handleClick() {
    const {color, msg} = randomAnswer();
    setColor(color);
    setMsg(msg);
    colorsCount[color] = colorsCount[color] + 1
    setColorsCount(colorsCount);
  }

  function resetEightBall() {
    setColor("black");
    setMsg("Think of a question");
    setColorsCount(initialColorCount);
  }

  return (
    [
      <div className='EightBall' style={style} onClick={handleClick}>
        <p className='EightBall-msg'>
          {msg}
        </p>
      </div>,
      <ResetButton resetEightBall={resetEightBall}/>,
      <Colors goldenrodCount={goldenrod} redCount={red} greenCount={green} />
    ]   
);
}

export default EightBall;