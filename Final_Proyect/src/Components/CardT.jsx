import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/Card.css";
import { useState } from "react";
import { postData } from "../Services/Calls";


function CardT({Ubicación,titulo,img,descripcion,Point,btnEliminar,btnEditar,showEditButton, showDeleteButton,showParticipateButton}) {
  const [Participar,setParticipar]=useState(true)
  

async function participe(){

    if(Participar){
      alert("¡Has decidido participar!");
      setParticipar(false);
    }else{
      alert("¡Has decidido no participar!");
      setParticipar(true);
    }
    
    await postData()

  }

  return (


    <>
    <section className="Container">
    <div className="CardsContainer">
  <div className="Cardss" style={{ width: "12rem", height: "auto" }}>
    <Card>
      <Card.Img className="Imgs" variant="" src={img} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Ubicación: {Ubicación}</ListGroup.Item>
          <ListGroup.Item>Puntos disponibles: {Point}</ListGroup.Item>
        </ListGroup>
        {showDeleteButton &&(
        <button className="btn-participar" onClick={btnEliminar}>Borrar</button>
        )}
        {showEditButton &&(
      <button className="btn-participar" onClick={btnEditar}>Editar</button>
        )}
        {showParticipateButton &&(
      <button className="btn-participar" onClick={participe}>{Participar ? "Participar" : "No participar"}
</button>
        )}
      </Card.Body>
    </Card>
  </div>
</div>
</section>
    </>
  );
}

export default CardT;
