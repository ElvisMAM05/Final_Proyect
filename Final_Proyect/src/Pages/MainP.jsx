import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { getData } from '../Services/Calls';
import CardT from '../Components/CardT';
import "../Styles/Card.css";



function Main() {
  const [eventos,setEventos] =useState([])
  

  useEffect(()=>{
    async function traeEventos() {
      const datos = await getData("events")
      setEventos(datos)
    }
    traeEventos()
  },[])



  return (
    <>
    <header>
    <Header/>
    </header>
    <main className='CardsContainer'>
      {eventos.map((evento)=>{
        return(
          <CardT
          
        
            img={evento.imgEvento}
            titulo={evento.nombreEvento}
            descripcion={evento.descripcionEvento}
            Point={evento.puntosEvento}
            Ubicación={evento.ubicacionEvento}
            showDeleteButton={false}
            showParticipateButton={true}
            showEditButton={false}
           
          />
        )
      })}
    </main>

    </>
  );
}

export default Main;