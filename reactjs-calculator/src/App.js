import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";
import Calculator from "./components/CalcApp";

function App() {
  const [data, setData] = useState({ operator: "", result: "" })
  const [theme, setTheme] = useState("light");

  function handleChange(e) { 
    setTheme(e.target.checked ? "dark" : "light");
    return
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    // Cambia el tema del body según el estado del tema
    // Change the body theme based on the theme state
  }, [theme])

  // This function updates the operator and result based on the button clicked
  // Esta función actualiza el operador y el resultado según el botón presionado
  function handleButtonClick(event) {
    const value = event.target.innerText;

    // Check if the value is a valid operator
    // Verifica si el valor es un operador válido
    const theOperator =
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%";

    //Delete the operator
    if (value === "❌") {
      setData({ ...data, operator: data.operator.slice(0, -1) });
      return;
    }

    //Clear the operator
    if (value === "C") {
      setData({ operator: "", result: "" });
      return;
    }

    //Character limit
    if (
      data.operator.length >= 10 &&
      value !== "C" &&
      value !== "=" &&
      value !== "❌"
    ) {
      return;
    }

    //% does not repeat
    if (value === "%" && data.operator.includes("%")) {
      // If the value is "%" and the operator already contains "%", do nothing
      // Si el valor es "%" y el operador ya contiene "%", no hacer nada
      return;
    }

    // If the value is "+/-", toggle the sign of the operator
    // Si el valor es "+/-" , cambia el signo del operador
    if (value === "+/-") {

      //Si hay resultado y no hay operación en curso
      // If there is a result and no operation in progress
      if (data.result !== "" && data.operator === "") {
        if (data.result.slice(0, 1) === "-") {
          setData({
            ...data,
            operator: `${data.result.slice(1, data.result.length)}`,
          });
        } else {
          setData({ ...data, operator: `-${data.result}` });
        }
      }
      
      // Si no hay resultado pero sí hay operador
      else if (data.operator !== "") {
        if (data.operator.slice(0, 1) === "-") {
          // If the operator starts with "-", remove it
          // Si el operador comienza con "-", elimínalo
          setData({
            ...data,
            operator: `${data.operator.slice(1, data.operator.length)}`,
          });
        } else {
          // If the operator does not start with "-", add it
          // Si el operador no comienza con "-", agrégalo
          setData({ ...data, operator: `-${data.operator}` });
        }
      }
      return;
    }

    //Resolver
    if (value === "=") {
      try {
        let result = "";
        if (data.operator.includes("%")) {
          const parts = data.operator.split("%");
          result = evaluate(`${parts[0]}*(${parts[1]}/100)`);
        } else {
          result = evaluate(data.operator);
        }

        // Redondear solo si es flotante
        const isFloat = !Number.isInteger(result);
        const finalResult = isFloat ? Number(result.toFixed(3)) : result;

        setData({ ...data, result: finalResult.toString(), operator: "" });
      } catch (error) {
        setData({ ...data, result: "Error" });
      }

      return;
    }

    //If there was an error, restart - Si hubo error, reiniciar
    if (data.operator.includes("Error")) {
      // If the operator contains "Error", reset it
      // Si el operador contiene "Error", reinícialo
      setData({ ...data, operator: value });
      return;
    }

    //If there is a previous result and a new operation starts
    //Si hay resultado previo y empieza nueva operación
    if (data.result !== "" && data.operator === "" && theOperator) {
      // If the result is not empty and the operator is empty, set the operator to the value
      // Si el resultado no está vacío y el operador está vacío, establece el operador al valor

      setData({ ...data, operator: `${data.result}` + value });
      return;
    }

    //Add number or operator - Agregar número u operador
    setData({ ...data, operator: `${data.operator}` + value });
  }

  return <Calculator data={data} onButtonClick={handleButtonClick}  onChange={handleChange}/>;
}

export default App;
