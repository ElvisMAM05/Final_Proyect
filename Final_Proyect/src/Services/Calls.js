const postData= async(info,endpoint)=>{
    try {
      const peticion = await fetch(`http://localhost:3000/${endpoint}`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(info)
      })
      const datos = await peticion.json()
      console.log(datos);
      return datos
    } catch (error) {
        console.error(error);
    }
}   

const getData=async(endpoint) => {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}`)
        const datos = await peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}

async function deleteUser(endpoint, id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${endpoint, id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
async function patchData(info,endpoint,id) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}/${id}`,{
          method:"PATCH",
          headers:{
              "Content-type":"application/json"
          },
          body: JSON.stringify(info)
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
      } catch (error) {
          console.error(error);
      }
}
export {postData,getData,deleteUser,patchData}   