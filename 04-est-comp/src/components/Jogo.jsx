import { useState } from "react";

function Jogo() {
  const [resultado, setResultado] = useState();

  function classificar() {
    let pontos = Number(prompt("Qual a pontuação?"));
    if (pontos <= 10) {
      setResultado("O meu Deus, não sobrou nada...");
    } else if (pontos <= 100) {
      setResultado(
        "Pô meu juvena... Você vai conseguir, mas vai ter que treinar muito ainda.",
      );
    } else if (pontos <= 200) {
      setResultado(
        "A mandibula do Mano Juca é forte, mas claro com a exceção de Satoro Gojo.",
      );
    } else {
      setResultado("Satoro Gojo é você?");
    }
  }
    return (
      <div className="jogo">
        <h2>Jogo do Mano Juca.</h2>
        <button onClick={classificar}>Classificar</button>
        <p>{resultado}</p>
      </div>
    );
  
}

export default Jogo;
