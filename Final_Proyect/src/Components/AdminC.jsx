import React, { useEffect, useState } from "react";
import { postData,getData } from "../Services/Calls";
import CardT from "../Components/CardT";
import "../Styles/Card.css"
function AdminC() {
  const [mostrar, setMostrar] = useState(false);
  const [nombreEvento, setNombreEvento] = useState("");
  const [descripcionEvento, setDescripcionEvento] = useState("");
  const [ubicacionEvento, setUbicacionEvento] = useState("");
  const [puntosEvento, setPuntosEvento] = useState(0);
  const [imgEvento, setImgEvento] = useState(null);
  const [MEX,setMEX]=useState(false)
  const [eventos,setEventos] =useState([])
  async function enviarEvento() {
    const evento = {
      nombreEvento: nombreEvento,
      descripcionEvento: descripcionEvento,
      ubicacionEvento: ubicacionEvento,
      puntosEvento: puntosEvento,
      imgEvento: imgEvento,
    };
    await postData(evento, "events");
  }

  const subir_img = (evento) => {
    const archivo = evento.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onloadend = () => {
        setImgEvento(lector.result);
      };
      lector.readAsDataURL(archivo);
    }
  };

  useEffect(()=>{
    async function traeEventos() {
      const datos = await getData("events")
      setEventos(datos)
    }
    traeEventos()
  },[])








  return ( 
    <>
      <button onClick={() => setMostrar(!mostrar)}>
        CREAR EVENTO 
      </button>

      <button onClick={()=>setMEX(!MEX)}>Mostrar Evento</button>
     

    {MEX && (
      <>
      <h2>Eventos</h2>
      <div className="cont-cardss">
      {eventos.map((evento)=>{
        return(
          <CardT
          key={evento.id}
            img={evento.imgEvento}
            titulo={evento.nombreEvento}
            descripcion={evento.descripcionEvento}
            Point={evento.puntosEvento}
            Ubicación={evento.ubicacionEvento}
            
          />
          
        )
      })}
     
      </div>
      </>
    )}

      

      {mostrar && (
        <>
          <h2>Evento</h2>
          <div>
            <input
              type="text"
              placeholder="Nombre Evento"
              onChange={(evento) => setNombreEvento(evento.target.value)}
            />
            <input
              type="text"
              placeholder="Descripción Evento"
              onChange={(evento) => setDescripcionEvento(evento.target.value)}
            />
            <input
              type="text"
              placeholder="Ubicación Evento"
              onChange={(evento) => setUbicacionEvento(evento.target.value)}
            />
            <input
              type="number"
              placeholder="Puntos del Evento"
              onChange={(evento) => setPuntosEvento(evento.target.value)}
            />
            <input
              type="file"
              placeholder="Puntos del Evento"
              onChange={subir_img}
            />

            <button onClick={enviarEvento}>Agregar Evento</button>
          </div>
        </>
      )}
    </>
  );
}

export default AdminC;
