import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Calibragem from './pages/Calibragem'
import Ho from './pages/Ho'


function App() {


  return (
  <div className="app">
<h1>Ex0081</h1>
<Ho/>
<Calibragem/>
<hr />
<Demo/>
<Home/>
     </div>
  )
}

export default App
