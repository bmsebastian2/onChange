import React,{Fragment,useState} from 'react'

const FormonSubmitonChange = () => {

    const [usuario, setusuario] = useState({
    
    })



    const onHandle = (e) =>{
          setusuario({
            ...usuario,[e.target.name]:e.target.value
        })

    }
    const onsubmit = (e) => {
         e.preventDefault();
  
       console.log(usuario.nombre + usuario.apellido);      
         


    }


    return (
        
        <Fragment>

         <div className="container mt-5 text-center">
            <h2 className="display-4">Formulario:</h2>
            <form action="" className="mt-5 d-flex flex-column align-items-center " onSubmit={onsubmit}>
                <div className="my-2">
                    <input type="text" 
                    placeholder="Ingrese nombre"
                    className="form-control"
                    name="nombre"
                    onChange={onHandle}
                    />
                </div>
                
                <div className="">
                    <input type="text" 
                    placeholder="Ingrese apellido"
                    className="form-control"
                    name="apellido"
                    onChange={onHandle}
                    />    
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary" type="submit"> Enviar</button>
                </div>
                

            </form>

            <h3 className="display-6 mt-5">{usuario.nombre}</h3>
            <h3 className="display-6">{usuario.apellido}</h3>
            </div>   


        </Fragment>
    )
}

export default FormonSubmitonChange
