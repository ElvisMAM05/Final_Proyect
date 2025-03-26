import React, { useState } from 'react'

function Add_IMG() {

    const [img,setImg]=useState(null)

    //function subir_img(evento){}

    const subir_img=(evento)=>{

const archivo =evento.target.files[0]
if(archivo){
    const lector= new FileReader()
    lector.onloadend=()=>{
        setImg(lector.result)
    }
    lector.readAsDataURL(archivo)
}


    }
  return (
    <>
    <input type="file" onChange={subir_img} />
    {img && <textarea value={img}/>}
    </>
  )
}

export default Add_IMG