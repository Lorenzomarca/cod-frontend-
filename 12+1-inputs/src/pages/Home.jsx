import { useState } from 'react'

function Home() {
    const[inputLogin, setInputLogin] = useState('')
    function efetuarLogin (){
        if(inputLogin == 'jeffrey'){
            alert('Você recebeu acesso de admin do sistema')
        }else{
            alert('Você digitou errado, o login é jeffrey')
        }
    }
  return (
    <div className='home'>
    <h1>Inputs Controlados</h1>
    <label htmlFor="">Login </label>

    <input type="text" 
    placeholder='Escreva o login'
      value={inputLogin}
      onChange={(e) => setInputLogin(e.target.value)}
    /> 
<p>
    {/* {inputLogin} */}

</p>
    <button onClick={efetuarLogin}>Entrar</button>
    </div>
  )
}

export default Home