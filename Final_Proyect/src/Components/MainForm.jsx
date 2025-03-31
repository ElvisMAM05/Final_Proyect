import React, { useState } from "react";
import { Await, Link } from "react-router-dom";
import "../Styles/Login.css";
import { getData, postData } from "../Services/Calls";
import { useNavigate } from "react-router-dom";
import AdminC from "./AdminC";
import Swal from 'sweetalert2';
function MainForm() {
  const navigate = useNavigate();
  const [Nombre, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [UserGmail, setGmail] = useState("");
  const [UserEdad, setEdad] = useState("");
  const [Gender, setGender] = useState("");
  const [NombreL, setNameL] = useState("");
  const [PasswordL, setPasswordL] = useState("");
  const [Change, setChange] = useState(true);
  async function SaveDates() {
    const Dates = {
      Nombre: Nombre,
      Password: Password,
      Gmail: UserGmail,
      Edad: UserEdad,
      Gender: Gender,
      Rol: "Usuario"
      
    };

    await postData(Dates, "Register");
  }

  async function LoginE() {
    const Datos = await getData("Register");

    const result = Datos.find(
      (Dato) => Dato.Nombre === NombreL && Dato.Password === PasswordL && Dato.Rol==="Usuario"
    );
    const result2= Datos.find(
      (Dato) => Dato.Nombre === NombreL && Dato.Password === PasswordL && Dato.Rol==="Admi"
    )

    if (result) {
      console.log("Welcome" + NombreL);
      navigate("/MainP");
    } else {
            if(result2){
              navigate("/Admins")
              }else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Contraseña o Usuario incorrecto",
                });
              }

    }
    
  }

  return (
    <>
      {/* INICIO LOGIN */}
      {Change === false && (
        <>
          <div className="Section_Login">
            <section>
              <ul>
                <li className="Change">
                  <Link className="Links ac" onClick={() => setChange(false)}>
                    Inicio Sesión{" "}
                  </Link>
                </li>
                <li className="Change">
                  <Link className="Links bc" onClick={() => setChange(true)}>
                    Crear Cuenta
                  </Link>
                </li>
              </ul>
            </section>
            <div className="contenedor-inputs">
              <div>
                <label className="Labels" htmlFor="">
                  Nombre usuario
                </label>
                <br />

                <input
                  className="Input_Base a"
                  type="text"
                  placeholder="Nombre usuario"
                  onChange={(e) => setNameL(e.target.value)}
                />
              </div>

              <div>
                <label className="Labels" htmlFor="">
                  Contraseña
                </label>
                <br />
                <input
                  className="Input_Base b"
                  type="password"
                  placeholder="Contraseña usuario"
                  onChange={(e) => setPasswordL(e.target.value)}
                />
                <button onClick={LoginE}>Iniciar Sesión</button>
              </div>
              <hr />
            </div>
            <Link className="enlaceMain">¿Olvidó la contraseña?</Link>
          </div>
          {/* FIN LOGIN */}
        </>
      )}

      {/* INICIO REGISTRO */}
      {Change === true && (
        <>
          <div className="Section_Register">
            <section>
              <ul>
                <li className="Change">
                  <Link className="Links ac" onClick={() => setChange(false)}>
                    Inicio Sesión /
                  </Link>
                </li>
                <li className="Change">
                  <Link className="Links bc" onClick={() => setChange(true)}>
                    Crear Cuenta
                  </Link>
                </li>
              </ul>
            </section>

            <div>
              <label className="Labels">Nombre usuario</label>
              <br />
              <br />
              <input
                className="Input_Base b"
                type="text"
                placeholder="Nombre usuario"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <label className="Labels">Contraseña</label>
              <br />
              <br />
              <input
                className="Input_Base a"
                type="password"
                placeholder="Contraseña usuario"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="" className="Labels">
                Correo usuario
              </label>
              <br />
              <input
                className="Input_Base a"
                type="email"
                placeholder="Nombre usuario"
                onChange={(e) => setGmail(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="" className="Labels">
                Fecha de nacimiento{" "}
              </label>
              <br />
              <br />
              <input type="date" onChange={(e) => setEdad(e.target.value)} />
              <br />
              <br />
              <label htmlFor="" className="Labels">
                Género
              </label>
              <br />
              <br />
              <select
                className="Selects"
                onChange={(e) => setGender(e.target.value)}
              >
                <option className="Options " value="" disabled selected>
                  Seleccione género
                </option>
                <option className="Options " value="masculino">Masculino</option>
                <option className="Options " value="femenino">Femenino</option>
                <option className="Options " value="otro">Otro</option>
              </select>

              <button  className="btn" onClick={SaveDates}>Crear Cuenta</button> 
            </div>
          </div>
          {/* FIN REGISTRO */}

          
        </>
      )}
    
      
    </>
  );


}

export default MainForm;
