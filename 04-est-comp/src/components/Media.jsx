import { useState } from "react"

function Media() {
 const [media, setMedia] = useState()
 function medi() {
   let n1 = Number(prompt("Digite sua primeira nota! "))
   let n2 = Number(prompt("Digite sua segunda nota!"))
   let total = (n1 + n2 )/2
   if(total >= 7){
    setMedia("Mano juca passo! com a média de: " + total)
   }else{
    setMedia("Mano juca reprovou! " + total)
   }
 }  
 return (
    <div className="media">
        <h2>Calcular media do juca</h2>
        <button onClick={medi}>Média</button>
        <p>{media}</p>
    </div>
  )
}

export default Media