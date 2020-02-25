import React from 'react';
import './ResetButton.css';

function ResetButton(props) {

  return (
    <button className='ResetButton' onClick={props.resetEightBall}> 
      Reset
    </button>
  );
}

export default ResetButton;