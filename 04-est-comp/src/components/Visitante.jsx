import { useState } from "react"



function Visitante() {
  const [resultado, setResultado] = useState()

   function liberar(){
    let visitantes = Number(prompt("Qual é o numero de visitantes?"));
    let hora = Number(prompt("Que horas é?"))
    
    if(visitantes == 0 && (hora < 8 || hora > 18)){
        setResultado("Liberação autorizada. Abrindo jaula.")
    }else{
        setResultado("Liberação negada. Área em uso ou fora do horário permitido.")
    }
   }

    return (
    <div className="visitar">
        <h2>Jaula!</h2>
        <button onClick={liberar}>Liberar jaula</button>
        <p>{resultado}</p>
    </div>
  )
}

export default Visitante