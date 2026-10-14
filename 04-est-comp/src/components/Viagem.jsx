import { useState } from "react"


function Viagem() {
  const [resultado, setResultado] = useState();

function ver (){
    let estarGripado = confirm("Sarumano está gripado?")
    let tempo = Number(prompt("Qual é o tempo de viagem?"))

    if(estarGripado && tempo < 45){
        setResultado("Viagem autorizada. Rumo ao show!")
    }else{
        setResultado("Deslocamento inviável. Melhor recusar este evento.")
    }
}

    return (
 <div className="viajar">
 <h2>Sarumano viagem</h2>
 <button onClick={ver}>Viajar</button>
 <p>{resultado}</p>
 </div>
  )
}

export default Viagem