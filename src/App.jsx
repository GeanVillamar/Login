import { useState } from 'react'
import './App.css';
//importar modulos firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)
//importar componentes
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [usuario, setUsuario] = useState()
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  )
}

export default App
