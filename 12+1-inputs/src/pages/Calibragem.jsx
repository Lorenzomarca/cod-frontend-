import { useState } from "react"


function Calibragem() {
  const [inputN, setInputN] = useState("")
  const [inputM, setInputM] = useState("")
    const [resultado, setResultado] = useState("Digite para ver a pressão!");
      function calcular() {
    setResultado(Number(inputN) - Number(inputM));
  };

  return (
<div className="ex0081">
       <h2>Calibragem</h2>
       <label htmlFor="">Pressão desejada N</label>

      <input
        type="text"
        placeholder="Escreva a pressão desejada"
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
      />

        <label htmlFor="">Pressão atual M</label>

      <input
        type="text"
        placeholder="Escreva a pressão atual"
        value={inputM}
        onChange={(e) => setInputM(e.target.value)}
      />

      <button onClick={calcular}>
        Calcular diferença
      </button>
<p>
    {resultado}
</p>
     

</div>
  )
}

export default Calibragem