import { useState } from "react"


function Ganso() {
const [ganso, setGanso] = useState()

function gansu(){
   let numerosMarujos = Number(prompt("Qual é a quantidade de marujos pro rolezão?"))
   let quantidadeDecomida = Number(prompt("Qual é a quantidade de comida?(em KG)"))
   let comida = quantidadeDecomida / numerosMarujos
   let dias = Number(prompt("Quantos dias vai durar a viagem?"))
   let run = Number(prompt("Qual é a quantidade de run?(em litros)"))
    
let comidaNecessaria = numerosMarujos * dias * 1.5
let runMinima = dias > 1 ? numerosMarujos * 0.5 : 0

if(numerosMarujos < 10){
    setGanso("Não pode zarpar! Faltam" + (10 - numerosMarujos) + "marujos.")
} else if (quantidadeDecomida < comidaNecessaria){
    setGanso("Não pode zarpar! Faltam " + (comidaNecessaria - quantidadeDecomida) + " KG de comida.")
}else if(run < runMinima){
    setGanso("Não pode zarpar! Faltam " + (runMinima - run) + " litros de run.")
}else{
     let sobra = quantidadeDecomida - comidaNecessaria
    let diasExtras = Math.floor(sobra / (numerosMarujos * 1.5))

    if (sobra > 0) {
        setGanso("Provisões suficientes. Rumo ao horizonte! Sobram " + sobra + " KG de comida, suficientes para mais " + diasExtras + " dias.")
    } else {
        setGanso("Provisões suficientes. Rumo ao horizonte!")
    }
}
}
  return (
    <div className="ganso">
        <h2>Capitão Ganso</h2>
        <button onClick={gansu}>Rolezão ilhas</button>
        <p>{ganso}</p>
    </div>
  )
}

export default Ganso