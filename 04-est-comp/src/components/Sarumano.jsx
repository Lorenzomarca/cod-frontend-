import { useState } from "react"


function Sarumano() {
   const [resultado, setResultado] = useState()
  
function sarumano(){
    let criancapequenas = Number(prompt("Digite o número de crianças pequenas: "))
    let velocidadedovento = Number(prompt("Digite a velocidade do vento (m/s): "))
    
    if(criancapequenas === 0 && velocidadedovento >= 0.5){
        setResultado("Fumaça liberada. Que comecem os mistérios!")
    }else{
        setResultado("Fumaça bloqueada. Aguardar condições ideais.")
    }
}

  return (
<div className="sarumano">
   <h2>Capitão Sarumano</h2>
    
    <button onClick={sarumano}>
        Show!
    </button>
    <p>{resultado}</p>
</div>
  )
}

export default Sarumano