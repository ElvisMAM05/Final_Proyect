import React, { useEffect, useState } from "react";
import { postData, getData, deleteData, patchData } from "../Services/Calls";
import CardT from "../Components/CardT";
import Swal from "sweetalert2";
import "../Styles/Admin.css"
function AdminC() {
  const [mostrar, setMostrar] = useState(false);
  const [DatosUser,setDatosUser]=useState(false)
  const [nombreEvento, setNombreEvento] = useState("");
  const [descripcionEvento, setDescripcionEvento] = useState("");
  const [ubicacionEvento, setUbicacionEvento] = useState("");
  const [puntosEvento, setPuntosEvento] = useState(0);
  const [imgEvento, setImgEvento] = useState(null);
  const [MEX, setMEX] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [Refrescar, setRefrescar] = useState("");
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  async function enviarEvento() {
    const evento = {
      nombreEvento: nombreEvento,
      descripcionEvento: descripcionEvento,
      ubicacionEvento: ubicacionEvento,
      puntosEvento: puntosEvento,
      imgEvento: imgEvento,
    };
    
    await postData(evento, "events");
    setRefrescar(!Refrescar);
    
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

  useEffect(() => {
    async function traeEventos() {
      const datos = await getData("events");
      setEventos(datos);

    }
    traeEventos();
  }, [Refrescar]);


  async function TraeUsuarios() {
    const DatosUsuarios=await getData("Register")
    setDatosUser(DatosUsuarios)
    
  }
  function manejarMostrarUsuarios() {
    if (!mostrarUsuarios) {
      TraeUsuarios(); // Solo carga los datos si no están ya mostrados
    }
    setMostrarUsuarios(!mostrarUsuarios); // Alternamos la visibilidad
  }

  async function Eliminar(id) {
    await deleteData("events", id);
    setRefrescar(!Refrescar);
  }

  function Editar(id) {
    Swal.fire({
      title: "<strong>EDITE SU TAREA AQUÍ</strong>",
      icon: "info",
      html: `
        <input type="text" id="inputEditarNombre" placeholder="EDITAR Nombre" />
        <textarea id="inputEditardescripcion" placeholder="EDITAR Descripción"></textarea>
        <input type="text" id="inputEditarPuntos" placeholder="EDITAR Puntos" />
        <input type="text" id="inputEditarUbicacion" placeholder="EDITAR Ubicación" />

      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Hecho!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonColor: "#d33",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i> Cancelar
      `,
      cancelButtonAriaLabel: "Thumbs down",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let inputEditarNombre = document.getElementById("inputEditarNombre");
        let inputEditardescripcion = document.getElementById(
          "inputEditardescripcion"
        );
        let inputEditarPuntos = document.getElementById("inputEditarPuntos");
        let inputEditarUbicacion = document.getElementById(
          "inputEditarUbicacion"
        );

        const actualizacionEvento = {};

        if (inputEditarNombre.value.trim() !== "") {
          actualizacionEvento.nombreEvento = inputEditarNombre.value;
        }
        if (inputEditardescripcion.value.trim() !== "") {
          actualizacionEvento.descripcionEvento = inputEditardescripcion.value;
        }
        if (inputEditarPuntos.value.trim() !== "") {
          actualizacionEvento.puntosEvento = inputEditarPuntos.value;
        }
        if (inputEditarUbicacion.value.trim() !== "") {
          actualizacionEvento.ubicacionEvento = inputEditarUbicacion.value;
        }

        if (Object.keys(actualizacionEvento).length > 0) {
          await patchData(actualizacionEvento, "events", id);
          setRefrescar(!Refrescar);
        } else {
          console.warn("No hay cambios para actualizar.");
        }

        await patchData(actualizacionEvento, "events", id);
      }
    });
  }
  return (
    <>
      <button className="Create" onClick={() => setMostrar(!mostrar)}>Crear Evento</button>

      <button className="Users" onClick={manejarMostrarUsuarios }>Mostrar Usuarios</button>

      <button className="Most" onClick={() => setMEX(!MEX)}>Mostrar Evento</button>


      {mostrarUsuarios && (
        <div className="usuarios-container">
          {DatosUser.length ? (
            DatosUser.map((usuario) => (
              <div key={usuario.id} className="usuario-card">
                <h3>{usuario.Nombre}</h3>
                <p>Email: {usuario.Gmail}</p>
                <p>Rol: {usuario.Rol}</p>
              </div>
            ))
          ) : (
            <p>No hay usuarios para mostrar.</p>
          )}
        </div>
      )}


      {MEX && (
        <>
          <div className="cont-cardss">
            {eventos.map((evento) => {
              return (
                <CardT
                  key={evento.id}
                  img={evento.imgEvento}
                  titulo={evento.nombreEvento}
                  descripcion={evento.descripcionEvento}
                  Point={evento.puntosEvento}
                  Ubicación={evento.ubicacionEvento}
                  btnEliminar={() => Eliminar(evento.id)}
                  btnEditar={() => Editar(evento.id)}
                  showDeleteButton={true}
                  showEditButton={true}
                  showParticipateButton={false}
                />
              );
            })}
          </div>
        </>
      )}

      {mostrar && (
        <>
          <div className="crear-evento">
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
