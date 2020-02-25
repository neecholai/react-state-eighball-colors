import React, { useState } from 'react';
import { randomAnswer } from './helpers';
import './EightBall.css';

function EightBall() {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  const style = {
    'background-color': color
  };

  function handleClick() {
    const {color, msg} = randomAnswer();
    setColor(color);
    setMsg(msg);
  }

  return (
    <div className='EightBall' style={style} onClick={handleClick}>
      <p className='EightBall-msg'>
        {msg}
      </p>
    </div>
  );
}

export default EightBall;