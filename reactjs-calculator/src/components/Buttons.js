import React from 'react';
import './Buttons.css';

export default function Buttons(props) {
  const {text, buttonClass} = props
  return(
    <div className={buttonClass}>{text}</div>
  )
}