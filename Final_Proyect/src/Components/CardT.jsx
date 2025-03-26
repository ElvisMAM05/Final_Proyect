import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/Card.css";
import { deleteData  } from "../Services/Calls";
function CardT({Ubicación,titulo,img,descripcion,Point,id}) {
 
function Eliminar(id){
  console.log(id)
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
        <button className="btn-participar" >Borrar</button>
      <button className="btn-participar">Editar</button>
      </Card.Body>
    </Card>
  </div>
</div>
</section>
    </>
  );
}

export default CardT;
