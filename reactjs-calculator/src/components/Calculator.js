import React from 'react';
import './Calculator.css';
import Buttons from './Buttons.js';
export default function Calculator(params) {
  return(
    <main className="Calculator">
        <input className='result' type="text" value="50"/>
        <input className='display' type="text" value="50+0"/>
  
         {[ // The buttons array contains the text and class for each button 
         //
          { text: "C", buttonClass: "gray" },
          { text: "+/-", buttonClass: "gray" },
          { text: "%", buttonClass: "gray" },
          { text: "/", buttonClass: "operator" },
          { text: "7", buttonClass: "number" },
          { text: "8", buttonClass: "number" },
          { text: "9", buttonClass: "number" },
          { text: "*", buttonClass: "operator" },
          { text: "4", buttonClass: "number" },
          { text: "5", buttonClass: "number" },
          { text: "6", buttonClass: "number" },
          { text: "-", buttonClass: "operator" },
          { text: "1", buttonClass: "number" },
          { text: "2", buttonClass: "number" },
          { text: "3", buttonClass: "number" },
          { text: "+", buttonClass: "operator" },
          { text: ".", buttonClass: "number" },
          { text: "0", buttonClass: "number" },
          { text: "❌", buttonClass: "number" },
          { text: "=", buttonClass: "operator" },

          
        ].map((btn, idx) => (
          <Buttons key={idx} text={btn.text} buttonClass={btn.buttonClass} />
        ))}
    </main>
  )
}