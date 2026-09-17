
import './App.css'

function App() {

function recruta(){
   let relPF = Number(prompt('Digite a quantidade de relatórios para PF:'));
  let relPJ = Number(prompt('Digite a quantidade de relatórios para PJ:'));
  let tempoPF = Number(prompt('Digite o tempo para elaborar os relatórios PF (em horas):'));
  let tempoPJ = Number(prompt('Digite o tempo para elaborar os relatórios PJ (em horas):'));
  let valorPF = Number(prompt('Digite o valor total recebido de PF (em R$):'));
  let valorPJ = Number(prompt('Digite o valor total recebido de PJ (em R$):'));

  let totalRelatorios = relPF + relPJ;
  let tempoTotal = tempoPF + tempoPJ;
  let valorTotal = valorPF + valorPJ;
  let mediaValorPF = valorPF / relPF || 0;
  let mediaValorPJ = valorPJ / relPJ || 0;
  let mediaTempoPF = tempoPF / relPF || 0;
  let mediaTempoPJ = tempoPJ / relPJ || 0;

  alert(`Quantidade total de relatórios: ${totalRelatorios}`);
  alert(`Tempo total trabalhado: ${tempoTotal} horas`);
  alert(`Valor total recebido: R$ ${valorTotal.toFixed(2)}`);
  alert(`Média de valor recebido para cada relatório PF: R$ ${mediaValorPF.toFixed(2)}`);
  alert(`Média de valor recebido para cada relatório PJ: R$ ${mediaValorPJ.toFixed(2)}`);
  alert(`Média de tempo gasto por relatório PF: ${mediaTempoPF.toFixed(2)} horas`);
  alert(`Média de tempo gasto por relatório PJ: ${mediaTempoPJ.toFixed(2)} horas`);
}

function freeler(){
  let horas = Number(prompt('Digite a quantidade estimada de horas: '));
  let precocobrado = 500 + (horas * 350);
  let lucro = precocobrado - 500;
  alert(`O preço que Junin deve cobrar do seu cliente é: R$ ${precocobrado.toFixed(2)}`);
  alert(`O lucro do freela é: R$ ${lucro.toFixed(2)}`);
}

function ler(){
  let caracteres = Number(prompt('Digite o número de caracteres do prompt: '));
  let custotoken = Number(prompt('Digite o custo de token (R$):'));
  let Tokenusados = 5 + caracteres
  let custototal = Tokenusados * caracteres;
  alert(`O número de tokens usados é: ${Tokenusados}`)
  alert(`O custo total do prompt é: R$ ${custototal}`)
}

function venderjare(){
  let caminhoes = Number(prompt('Digite o número de caminhões:'))
  let jaresvendidos = caminhoes * 50;
  let faturamente = jaresvendidos * 90;
  let custo = caminhoes * 450
  let lucro = faturamente - custo
  alert('O lucro da temporada de vendas é de R$ ' + lucro.toFixed(2))
}

function calcularChurrasco() {
let pessoas = Number(prompt('Digite o numero de pessoas que vai ao churrasco:'))
let carne = pessoas * 0.5
let cerveja = pessoas * 1
let agua = pessoas * 0.5
let refri = pessoas * 0.2
alert('A quantidade de pessoas que vai ao churrasco: ' + pessoas)
alert('A quantidade de carnes nescessarias será de: ' + carne.toFixed(2) + 'kg')
alert('A quantidade de cerveja pro churrasco é: ' + cerveja.toFixed(2) + 'L')
alert('A quantidade de agua será de: ' + agua.toFixed(2) + 'L')
alert('A quantidade de refri será de: '+ refri.toFixed(2) + 'L')
}


function calcularPetshop() {
  let peso = Number(prompt('Digite o peso da ração em g:'))
  let preco = (peso / 1000) * 10
  alert('O preço da ração é de: R$' + preco.toFixed(2))
}

function calcularVendaArte() {
  let valorcompra = Number(prompt('Digite o valor de compra da arte:  '))
  let valorvenda = valorcompra * 3
  alert('O valor que você deve revender para ter 200% de lucro é: R$' + valorvenda.toFixed(2))
}

  function calcularRestinhoSalario() {
    let salariomes = Number(prompt('Digite o salário do mês:'))
  let moradia = Number(prompt('Digite o valor da moradia:'))
  let agua = Number(prompt('Digite o valor da água:'))
  let luz = Number(prompt('Digite o valor da luz:'))
  let internet = Number(prompt('Digite o valor da internet:'))
  let gasolina = Number(prompt('Digite o valor da gasolina:'))
  let streamings = Number(prompt('Digite o valor gasto com streamings:'))
  let telefone = Number(prompt('Digite o valor gasto com telefone:'))
  let lazer = Number(prompt('Digite o valor gasto com lazer:'))
  let totalgastos = moradia + agua + luz + internet + gasolina + streamings + telefone + lazer
  let restinhosalario = salariomes - totalgastos
  alert('O valor que sobra do salário meu lindo é de: R$' + restinhosalario.toFixed(2))
  }

function calcularBomba() {
 let quatidadedeshows = Number(prompt('Digite a quantidade de shows que você vai fazer: '))
 let valorbomba = Number(prompt('Digite o valor da bomba de fumaça:'))
 let totalbomba = 7*quatidadedeshows
 let totalvalor = totalbomba*valorbomba
  alert('A quantidade de bombas que você vai precisar é: ' + totalbomba + ' e o dinheiro que você vai gastar com bombas é: R$' + totalvalor.toFixed(2))

}


function calcularLucroMensal() {
  let gastos = Number(prompt('Digite o valor dos gastos com suprimentos e mercadorias:'))
  let ingressos = Number(prompt('Digite o valor dos ingressos vendidos:'))
  let itens = Number(prompt('Digite o valor dos itens vendidos:'))
  let lucro = (ingressos + itens) - gastos
  alert('O lucro mensal é de: R$' + lucro.toFixed(2))
  let porcentagem = (lucro / (ingressos + itens)) * 100
  alert('O lucro percentual é de: ' + porcentagem.toFixed(2) + '%')
}

function cassinododona19() {
let valorbruto = Number(prompt('Digite o valor bruto do prêmio:'))
let premiacoes = Number(prompt('Quanto você gastou com premiações?'))
let agrados = Number(prompt('Quanto você gastou com agrados?'))
let comissioes = Number(prompt('Quanto você gastou com comissões para os operadores?'))
let valorliquido = valorbruto - (premiacoes + agrados + comissioes)
alert('O valor líquido do prêmio é de: R$' + valorliquido.toFixed(2))
}

function calcularFrete() {
    let distancia = Number(prompt('Digite a distância em km: '))
    let peso = Number(prompt('Digite o peso em kg:'))
    let volume = Number(prompt('Digite o volume em m³:'))
    let frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
    alert('O valor do frete é de: R$' + frete.toFixed(2))
}
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


<button onClick={calcularpontos}>Campeonato</button>
<button onClick={trocarsapatos}>Trocas Pé pequeno</button>
<button onClick={calcularRh}>Rh da empresa</button>
<button onClick={macaspomar}>Projeto pomar</button>
<button onClick={igrejadividas}>Calcular dividas</button>
<button onClick={calcularSalario}>Calcular salario</button>
<button onClick={calcularPesoVeiculo}>Peso do veiculo</button>
<button onClick={calcularProbabilidade}>Probabilidade</button>
<button onClick={calcularFrete}>Frete</button>
<button onClick={cassinododona19}>Verificar lucro</button>
<button onClick={calcularLucroMensal}>Lucro mensal</button>
<button onClick={calcularBomba}>Quantidade de bombas</button>
<button onClick={calcularRestinhoSalario}>Restinho de salario</button>
<button onClick={calcularVendaArte}>Venda de arte com lucro</button>
<button onClick={calcularPetshop}>Petshop</button>
<button onClick={calcularChurrasco}>Churrasco</button>
<button onClick={venderjare}>Vendas de jarés</button>
<button onClick={ler}>Iastartup</button>
<button onClick={freeler}>Fellancer</button>
<button onClick={recruta}>Kowalski</button>
<hr />
      
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
