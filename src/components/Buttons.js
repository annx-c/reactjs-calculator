import React from 'react';
import './Buttons.css';

export default function Buttons(props) {
  const {text, buttonClass, handleClick} = props
  return(
    <button className={buttonClass} onClick={handleClick}>{text}</button>
  )
}