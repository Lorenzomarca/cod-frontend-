import { useState } from "react"

function Cracha() {
 const [resultado, setResultado] = useState()

 function reconhecimento(){
   let crachaValido = confirm("O crachá é válido?")
   let digitalReconhecida = confirm("A digital foi reconhecida?");
   if (crachaValido && digitalReconhecida) {
  setResultado("Acesso liberado ao Centro de Comando");
} else if (!crachaValido && digitalReconhecida) {
  setResultado("Crachá inválido. Dirija-se à recepção");
} else if (crachaValido && !digitalReconhecida) {
  setResultado("Falha na digital. Tente novamente ou chame o suporte");
} else {
  setResultado("Acesso negado. Verifique sua identificação.");
}
 }

 return (
<div className="digital">
    <h2>Acesso a central de comando!</h2>
    <button onClick={reconhecimento}>comando</button>
    <p>{resultado}</p>
</div>
  )
}

export default Cracha