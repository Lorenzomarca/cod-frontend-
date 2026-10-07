import { useState } from "react"

function Pesar() {
const [peso, setpeso] = useState();
function calcular() {
let altura = Number(prompt("Qual a sua altura?"));
let genero = prompt("Digite seu gênero (M/F): ");
if(genero === "F"){
    setpeso("Seu peso ideal é: " + ((62.1 * altura) - 44.7).toFixed(2) + "KG")
}else if (genero === "M"){
    setpeso("Seu peso ideal é: " + ((72.7 * altura) - 58).toFixed(2) + "KG")
}else{
    setpeso("Letra invalida!")
}
}
    return (
    <div className="peso">
        <h2>Pesar</h2>
        <button onClick={calcular}>Ver peso ideal</button>
        <p>{peso}</p>
    </div>
  )
}

export default Pesar