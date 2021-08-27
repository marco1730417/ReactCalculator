/*
eslint no-eval: 0
*/

import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

// Función Flecha o Arrow Function
const App = () => {
  // Array destructuring
  //1 posicion valor inicial
  // 2 posicion valor modificado es una funcion

  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g); //array que el usuario ingresa pero no los numeros
  const value = items.length > 0 ? items[items.length - 1] : "0";

  // console.log("Renderización de App",value);

  //const arrayTextoFuncionModificaTexto= useState("")
  //const arrayTextoFuncionModificaTexto=> ["texto", funcion]
  //1 posicion valor inicial
  /* const texto= arrayTextoFuncionModificaTexto[0] */
  // 2 posicion valor modificado
  /* const funcionModificaTexto =arrayTextoFuncionModificaTexto[1] */
  // Lo que ejecuta la función

  return (
    <main className="react-calculator">
      <Result value={value} />
      <div className="numbers">
        <Numbers
          onClickNumber={(number) => {
            console.log("Click en number:", number);
            setStack(`${stack}${number}`);
          }}
        ></Numbers>
      </div>
      <Functions
        onContentClear={() => setStack("")}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        onClickEqual={(equal) => {
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
