import { useState } from "react"

function Votar() {
  const [voto, setVoto] = useState()

  function registrarVoto() {
    let idade = prompt("Qual a sua idade?");
     if (idade < 16) {
      setVoto("Você não pode votar.");
    }else if (idade >15 && idade <= 17){
        setVoto("Você pode votar, mas não é obrigatório.");
    }else if(idade >= 18 && idade <= 65){
        setVoto("Você pode votar e é obrigatório.");
    }else{
        setVoto("Você pode votar, mas não é obrigatório.");
    }
  }

  return (
    <div className="VOTAR">
        <h2>Votar eba!!!</h2>
      <button onClick={registrarVoto}>Registrar Voto</button>
      <p>{voto}</p>
    </div>
  )
}

export default Votar