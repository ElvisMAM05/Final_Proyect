import React from "react";
import "../Styles/Nav.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate= useNavigate()
  return (
    <>
    <div className="cont-hero">
      <img className="Title" src=".\src\Images\Title.png " alt="Img" />
    </div>

    <a href="#collage1"><img className="img" src="../src/Images/Arrows.png" alt="" /></a>

    <img className="Dude" src="../src/Images/Arrows(1).png" alt="" onClick={()=>navigate("/login")}/>
    </>

  );
}

export default Hero;
