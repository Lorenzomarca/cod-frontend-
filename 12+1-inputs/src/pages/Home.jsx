import { useState } from 'react'

function Home() {
    const[inputLogin, setInputLogin] = useState('')
  return (
    <div className='home'>
    <h1>Inputs Controlados</h1>
    <label htmlFor="">Login </label>

    <input type="text" 
      value={inputLogin}
      onChange={(e) => setInputLogin(e.target.value)}
    /> 
<p>
    {/* {inputLogin} */}

</p>
    <button>Entrar</button>
    </div>
  )
}

export default Home