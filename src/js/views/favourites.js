import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Favourites = () => {
    const {actions, store} = useContext(Context)

    useEffect(()=>{

    },[])
        return (
        <>
            <div>
                {store.button && store.button.map((element)=>{return (
                    <>
                  <div className="card m-2" style={{width: "18rem"}}  >
                  <div className="card-body text-center">
                      <h5 className="card-title">{element.gravity ? element.name: element.manufacturer ? element.name : element.name }</h5>
                      {/* <p className="card-text ">{element.gravity ? <p>Gravedad : {element.gravity}</p>: element.manufacturer ? <p>Manufacturer: {element.name}</p> : <p>Color de pelo: {element.name}</p>}</p> */}
                      {/* <p className="card-text ">{element.gravity ? <p>Periodo de rotación: {element.rotation_period}</p>: element.cost_in_credits ? <p>Coste en creditos: {element.cost_in_credits}</p> : <p>Altura : { element.height.charAt(0).toUpperCase()+ element.height.slice(1)}</p>}</p> */}
                      {/* <p className="card-text ">{element.gravity ? element.name: <p>Genero: {element.gender.charAt(0).toUpperCase()+ element.gender.slice(1)}</p>}</p> */}


                  </div>
              </div>
              </>
                
                
                )})}
            </div>
        </>    
            )
}