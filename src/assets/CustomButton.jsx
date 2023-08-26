import React from 'react';
import './cstmbtn.css'
const CustomButton = (props) => {
  return (
    <button
      className="custombbutton"
      style={props.style}
      onClick= {props.onClick}
    >
      <span className="button-text">{props.txt}</span>
      {/* <span className="down-chevron-icon">&#9660;</span> */}
    </button>
  );
};

export default CustomButton;
