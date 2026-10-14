import { useState } from "react"


function Nadar() {
    const [natacao, setNatacao] = useState()

    function recrutamento (){
        let sabeNadar = prompt("Sabe nadar? (True/False)") === "True";
        let idade = Number(prompt("Qual a idade?"));
        let temRecomendacao = prompt("Tem recomendação de outro pirata? (True/False)") === "True";
    
      if(sabeNadar && idade > 16){
        setNatacao("Aprovado para o navio!")
      }else if (!sabeNadar && temRecomendacao && idade >= 14){
        setNatacao("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
      }else{
        setNatacao("Reprovado. Volte quando estiver mais preparado para o mar.")
      }

    }
  return (
    <div className="nadar">
        <h2>Recrutamento de natação</h2>

        <button onClick={recrutamento}>Recrutar!</button>
        <p>{natacao}</p>
    </div>
  )
}

export default Nadar