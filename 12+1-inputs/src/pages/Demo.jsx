import React, { useState } from "react";

function Demo() {
    const [inputnota1, setInputNota1] = useState('')
        const [inputnota2, setInputNota2] = useState('')
         const [resultado, setResultado] = useState('Digite suas notas para ver sua média!')
      function calcularMerdia(){
        let n1 = Number(inputnota1)
        let n2 = Number(inputnota2)
        let media = (n1 + n2) / 2
        // alert(media)
        setResultado(media)
      }
    return (
    <div className="demo">
      <h1>Demo - médias</h1>
      <label htmlFor="">Nota 1</label>

      <input
        type="text"
        id="nota1"
        placeholder="Escreva a primeira nota"
        value={inputnota1}
        onChange={(e) => setInputNota1(e.target.value)}
      />
 
        <label htmlFor="">Nota 2</label>

      <input
      id="nota2"
        type="text"
        placeholder="Escreva a segunda nota"
        value={inputnota2}
        onChange={(e) => setInputNota2(e.target.value)}
      />
      <button onClick={calcularMerdia}>Calcular a média</button>
      <p>
        {resultado}
      </p>
    </div>
  );
}

export default Demo;
