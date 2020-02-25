import React from 'react';
import './Colors.css';

function Colors(props) {
  return (
    <div className="Colors">
      <p className="Colors-goldenrod">Goldenrod count: {props.goldenrodCount} </p>
      <p className="Colors-red">Red count: {props.redCount} </p>
      <p className="Colors-green">Green count: {props.greenCount} </p>
    </div>
  );
}

export default Colors;