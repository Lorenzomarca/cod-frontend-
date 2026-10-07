import { useState } from "react"


function Ferias() {
  const [pousada, setPousada] = useState();

  function calculos() {
    let diaria = Number(prompt("Qual a quantidade de dias hospedado?"));
    
    let valor;
    let total;

    if(diaria <= 5){
        valor = 100;
 
    }else if(diaria <= 10){
        valor = 90;
    }else{
        valor = 80;
    }
    total = (diaria * valor)* 0.75 + 150;
    setPousada(`O total de dias hospedado foi de ${diaria}, o valor da diaria foi de R$${valor}, o total de descontos aplicados foi de 25% e a multa foi de R$150,00, e o valor total a ser pago é de R$${total}`);
}
    return (
    <div className='pousada'>
        <h2>Pousada, oba!!!</h2>
<button onClick={calculos}>Calcular diaria!</button>
<p>{pousada}</p>
    </div>
  )
}

export default Ferias