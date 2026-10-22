import { useState } from "react"

function Ho() {
 const [numero, setNumero] = useState("");
const [resultado, setResultado] = useState("");
function calcularh (){
    let n = Number(numero);

    let texto = "";
    
    for(let i = 0; i < n; i++){
        texto += "Ho "
    }
    texto = texto.trimEnd() + "!"

    setResultado(texto)
}
 
    return (
    <div className="ho">
<h2>Papai noel!</h2>
<label htmlFor="">Digite o Numero para converter em Ho`s</label>
<input
  type="number"
  value={numero}
  onChange={(e) => setNumero(e.target.value)}
/>
<button onClick={calcularh}>
  Gerar Ho!
</button>

<p>{resultado}</p>
    </div>
  )
}

export default Ho