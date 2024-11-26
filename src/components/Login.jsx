import { useState } from 'react'
import Imagen from '../assets/LoginVector.jpg'
import Profile from '../assets/profile.png'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

function Login(){
    const[registrando, setRegistrando] = useState(false)
    const functAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            try{
                await signInWithEmailAndPassword(auth, correo, contraseña)
            }catch(error){
                alert("El correo o contraseña son incorrectos");
            }
        }
    }
    return(
        <div className="container"> 
            <div className="row">
                <div className="col-md-4">
                    <div className='padre'>
                        <div className='card card-body shadow-lg'>
                        <img src={Profile} alt='' className='estilo-profile'/>
                            <form onSubmit={functAutenticacion}>
                                <input type='text' placeholder='Ingresar Email' className='cajatexto' id='email'/>
                                <input type='password' placeholder='Ingresar password' className='cajatexto' id='password'/>
                                <button className='btn-register'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                            </form>
                            <h5 className='texto'>{registrando ? "si ya tienes cuenta" : "No tienes cuenta"}<button className='btnSwitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen} alt='' className='tamaño-imagen'/>
                </div>
            </div>
        </div>
    )
}
export default Login