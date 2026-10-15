import './App.css'
import Ferias from './components/Ferias'
import Jogo from './components/Jogo'
import Maca from './components/Maca'
import Media from './components/Media'
import Pesar from './components/Pesar'
import Votar from './components/Votar'
import Ganso from './components/Ganso'
import Nadar from './components/Nadar'
import Sarumano from './components/Sarumano'
import Viagem from './components/Viagem'
import Som from './components/Som'
import Denys from './components/Denys'
import Cracha from './components/Cracha'
import Visitante from './components/Visitante'

function App() {

  return (
  <div className="app">
    <h1>04 estados e componentes</h1>
   
   <h2>#0030</h2>
   <Visitante/>
   <Cracha/>
   <Denys/> 
    <Som/>
    <Viagem/>
    <Sarumano/>
     <Nadar />
     <Ganso/>
   <hr />

   <h2>#0027.sq05</h2>
   
   
 
    <Media />
    <Maca />
    <Pesar />
    <Votar />
    <Ferias />
    <Jogo />


  </div>
  )
}

export default App
