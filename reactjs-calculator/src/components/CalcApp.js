import React from "react";
import "./CalcApp.css";
import Buttons from "./Buttons";
export default function CalcApp(props) {
  const { data, onButtonClick } = props;
  return (
    <main className="CalApp">
      <span className="result">{data.result}</span>
      <span className="display">{data.operator}</span>

      {[
        // The buttons array contains the text and class for each button - La matriz de botones contiene el texto y la clase para cada botón

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
        <Buttons
          key={idx}
          text={btn.text}
          buttonClass={btn.buttonClass}
          handleClick={onButtonClick}
        />
      ))}
    </main>
  );
}
