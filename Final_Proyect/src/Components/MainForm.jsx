import React, { useState } from 'react'
import { Await, Link } from 'react-router-dom'
import '../Styles/Login.css'
import { getData, postData } from '../Services/Calls'
function MainForm() {

const [Nombre,setName]=useState("")            
const [Password,setPassword]=useState("")        
const [UserGmail,setGmail]=useState("")        
const[UserEdad,setEdad]=useState("")
const [Gender,setGender]=useState("")


    async function SaveDates() {
        const Dates={

                "Nombre":Nombre,
                "Password":Password,
                "Gmail":UserGmail,
                "Edad": UserEdad,
                "Gender": Gender, 
        }

        await postData(Dates,"Register")
        
    }
    function Login(){
        const [NombreL,setNameL]=useState("")            
        const [PasswordL,setPasswordL]=useState("") 


        async function LoginE() {

            const Datos=  await getData("Register")

             const result =Datos.find((Dato)=>Nombre===) 
        }

        

    

     }


  return (
    <>
    {/* INICIO LOGIN */}
        <div className='Section_Login'>
            <section>
                <ul>
                    <li className='Change'>
                    <Link >Inicio Sesión /</Link>
                    </li>
                    <li className='Change'>
                    <Link >Crear Cuenta</Link>
                    </li>
                </ul>
            </section>
            <div className='contenedor-inputs'>
                <div>
                <label className='' htmlFor="">Nombre usuario</label>
                <br />
                <input className='Input_Base a'type="text" placeholder='Nombre usuario' />
                </div>

                <div>
                <label  htmlFor="">Contraseña</label>
                <br />
                <input  className='Input_Base b' type="password" placeholder='Contraseña usuario'/>
                <button>Iniciar Sesión</button>
                </div>
                <hr /> 

            </div>
                <Link className='enlaceMain'>¿Olvidó la contraseña?</Link>
        </div>
    {/* FIN LOGIN */}

    {/* INICIO REGISTRO */}
    <div className='Section_Register'>
            <section>
                <Link>Inicio Sesión</Link>
                <Link>Crear Cuenta</Link>
            </section>
            <div>
                <label htmlFor="">Nombre usuario</label>
                <br />
                <input className='Input_Base a' type="text" placeholder='Nombre usuario'  onChange={(e)=>setName(e.target.value)
                } />

                <label htmlFor="">Contraseña</label>
                <br />
                <input type="password" placeholder='Contraseña usuario' onChange={(e)=>setPassword(e.target.value)}/>

                <label htmlFor="">Correo usuario</label>
                <br />
                <input type="email" placeholder='Nombre usuario'onChange={(e)=>setGmail(e.target.value)} />

                <label htmlFor="">Fecha de nacimiento </label>

                <input type="date" onChange={(e)=>setEdad(e.target.value)}/>

                <label htmlFor="">Género</label>
               
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="" disabled selected>Seleccione género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
                <button onClick={SaveDates}>Crear Cuenta</button>
                <hr /> 
            </div>
        </div>
    {/* FIN REGISTRO */}
    </>

)
}

export default MainForm