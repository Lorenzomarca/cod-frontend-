import React, { useState } from 'react'

function Denys() {
  const [permitido, setPermitido] = useState()
  function parque(){
    let emManutencao = confirm("O transporte está em manutenção?")
    let emergenciaAtiva = confirm("Tem alguma emergencia no momento?")

    if(!emergenciaAtiva && !emManutencao){
        setPermitido("Transporte liberado para uso.")
    }else{
        setPermitido("Transporte indisponível por motivo de segurança.")
    }
  }
    return (
 <div className="dinossauro">
    <h2>Transporte interno</h2>
    <button onClick={parque}>Verifiação</button>
    <p>{permitido}</p>
 </div>
  )
}

export default Denys