import './App.css';
import Formulario from './form';
import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [occurrences, setOccurrences] = useState("");
  const [duration, setDuration] = useState("");

  const calcular = () => {
    if (validaForm()) {
      let numero = document.getElementById('numero').value
      fetch('http://localhost:8080/calcular', {
        method: 'POST',
        body: numero,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
      .then(retorno => retorno.json())
      .then(retornoConv => {
        console.log(retornoConv);
        if (retornoConv.mensagem){
          setMessage(retornoConv.mensagem)
          setShowMessage(true);
        } else {
          setShowMessage(false);
          setOccurrences(retornoConv.ocorrencias)
          setDuration(retornoConv.tempo + " ms")
        }
      })
    }
  }

  const validaForm = () => {
    let numero = document.getElementById('numero').value
    if (!numero) {
      setMessage("Valor inválido!")
      setShowMessage(true);
      return false;
    }
    setShowMessage(false);
    return true;
  }
  
  return (
    <div className="container">
        <Formulario message={message} 
                    showMessage={showMessage} 
                    calcular={calcular}
                    occurrences={occurrences}
                    duration={duration}
                    />
    </div>
  );
}

export default App;
