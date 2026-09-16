
import './App.css'

function App() {

function calcularProbabilidade() {
  let vezescelular = Number(prompt('Digite quantas vezes você usou o celular no meio de palestras:'))
  let chanches = (0.1/(1 + 500*vezescelular))*100
  alert('A probabilidade de você ser aprovado na faculdade é de: ' + chanches.toFixed(4) + '%')
  let chancheshumanas = 1/chanches
  alert('As chances humanas de você ser aprovado na faculdade são de: ' + chancheshumanas.toFixed(2) + '%')
}
  function calcularPesoVeiculo() {
    let pesobruto = Number(prompt('Digite o peso bruto do veículo:'))
    let tara = Number(prompt('Digite a tara do veículo:'))
    let pesoliquido = pesobruto - tara
    alert('O peso líquido da carga é de: ' + pesoliquido + ' kg')
  } 

function calcularSalario() {
  let salariomes = Number(prompt('Digite o salário do mês:'))
  let diastrabalhados = Number(prompt('Digite a quantidade de dias trabalhados:'))
  let salariodiario = salariomes / 30
  alert('O salário diário é de: R$' + salariodiario.toFixed(2) + ' e o salário total do mês é de: R$' + (salariodiario * diastrabalhados).toFixed(2))
  let salariosemana = salariodiario * 5;
  alert('O salário semanal é de: R$' + salariosemana.toFixed(2))
}


function igrejadividas() {
  let custosmes = Number(prompt('Digites os custos do mês:'))
  let doacoes = Number(prompt('Digite o valor das doações:'))
  let dizimos = Number(prompt('Digite o valor dos dízimos recebidos:'))
  let dividas = custosmes - (doacoes + dizimos)
  alert('o valor que falta a pagar é de: R$' + dividas.toFixed(2))
}

function macaspomar() {
  let macas = Number(prompt("Quantidade de maçãs inicial: "))
  let macasfinais = Number(prompt("Quantidade de maçãs finais: "))
  let macasvendidas = macas - macasfinais
  alert("O total de maçãs vendidas é: " + macasvendidas)
}

function calcularRh() {
  let cltrh = Number(prompt("Quantos clts tem na empresa?"))
  let estagiarios = Number(prompt("Quantos estagiários tem na empresa?"))
  let pj = Number(prompt("Quantos pjs tem na empresa?"))
  let total = cltrh + estagiarios + pj
  alert("O total de clts na empresa é " + cltrh + ", o total de estagiários é " + estagiarios + " e o total de pjs é " + pj + ". O total de Devs na empresa é " + total)
}

function trocarsapatos() {
 let precopar = Number(prompt("Qual é o preço do par de sapatos?")) 
 let quantidadedeparestrocados = Number(prompt("Quantos pares de sapatos você quer trocar?"))
  let valortotal = precopar * quantidadedeparestrocados
  alert('Valor total da troca: R$' + valortotal.toFixed(2))
}

function calcularpontos() {
   let vitorias = Number(prompt("Número de vitórias:"))
   let empates = Number(prompt("Número de empates:"))
  
   let pontos = vitorias*3 + empates //*1 se tiver toque

   alert("o time teu tem " + pontos + " pontos")
}

  function testar() {
    let nome = prompt("Qual é o seu nome?")
    let bocaDoSapo = nome
    alert(nome + ", seu nome tá na bocaDoSapo 🐸☠️")
  }

  function calcularMedia() {
    let nota1 = Number(prompt("Manda a primeira nota:"))
    let nota2 = Number(prompt("Manda a segunda nota:"))
    let media = (nota1 + nota2) / 2
    alert("A média é: " + media)
  }

  return (
   <div className="cont-app">
      <h1>Javascript no React</h1>

<h2>Exercicios supimpas</h2>


<button onClick={calcularpontos}>campeonato</button>
<button onClick={trocarsapatos}>Trocas Pé pequeno</button>
<button onClick={calcularRh}>Rh da empresa</button>
<button onClick={macaspomar}>Projeto pomar</button>
<button onClick={igrejadividas}>calcular dividas</button>
<button onClick={calcularSalario}>calcular salario</button>
<button onClick={calcularPesoVeiculo}>peso do veiculo</button>
<button onClick={calcularProbabilidade}>probabilidade</button>
<hr />
      
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
