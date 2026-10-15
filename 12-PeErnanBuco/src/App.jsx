import { useState } from 'react'
import './App.css'
import Oraçãododevcansado from './components/Oracao1'
import Oraçãodoaprendiz from './components/Oracao5'
import OraçãodoBackend from './components/Oracao4'
import OraçãodoFrontend from './components/Oracao2'
import OraçãododesenvolvedorWeb from './components/Oracao3'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
   <button onClick={() => setCount(1)}>Oração 1</button>
     <button onClick={() => setCount(2)}>Oração 2</button>
      <button onClick={() => setCount(3)}>Oração 3</button>
       <button onClick={() => setCount(4)}>Oração 4</button>
        <button onClick={() => setCount(5)}>Oração 5</button>
    <h1>Painel de orações</h1>
     
     {count == 1 && <Oraçãododevcansado/>}
     {count == 2 && <Oraçãodoaprendiz/>}
     {count == 3 && <OraçãodoBackend/>}
     {count == 4 && <OraçãodoFrontend/>}
     {count == 5 && <OraçãododesenvolvedorWeb/>}


   </div>
  )
}

export default App
