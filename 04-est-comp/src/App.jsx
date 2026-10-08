import './App.css'
import Ferias from './components/Ferias'
import Jogo from './components/Jogo'
import Maca from './components/Maca'
import Media from './components/Media'
import Pesar from './components/Pesar'
import Votar from './components/Votar'

function App() {

  return (
  <div className="app">
    <h1>04 estados e componentes</h1>
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
