import React, { useState } from 'react'

function Som() {
   const [resu, setResultado] = useState();
   function verificar(){
    

let somFuncionando = confirm("O som está funcionando?");
let figurinoCompleto = confirm("O figurino está completo?");

if (somFuncionando && figurinoCompleto) {
setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
} else if (!somFuncionando && figurinoCompleto) {
    setResultado("Sem som. Realizar apresentação alternativa no salão.");
} else if (somFuncionando && !figurinoCompleto) {
setResultado("Faltando parte do figurino. Te vira no improviso!");
} else {
   setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
}

   }
    return (
   
    <div className="son">
        <h2>Apresentação Sarumano</h2>
        <button onClick={verificar}>Apresentação</button>
        <p>{resu}</p>
    </div>
  )
}

export default Som