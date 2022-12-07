import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Favourites = () => {
    const {actions, store} = useContext(Context)

    useEffect(()=>{

    },[])
        return (
        <>
            <div className="d-flex flex-wrap justify-content-center container">
                {store.button && store.button.map((element)=>{return (
                <>
                    <div className="card m-2" style={{width: "18rem"}}  >
                        <div className="card-body text-center">
                            <h5 className="card-title">{element.gravity ? element.name: element.manufacturer ? element.name : element.name }</h5>
                            <p className="card-text ">{element.gravity ? <p><strong>Gravedad</strong> : {element.gravity}</p>: element.manufacturer ? <p><strong>Longitud</strong>: {element.length}</p> : <p><strong>Color de pelo:</strong> {element.name}</p>}</p>
                            <p className="card-text ">{element.gravity ? <p><strong>Periodo de rotación</strong>: {element.rotation_period}</p>: element.cost_in_credits ? <p><strong>Coste en creditos:</strong> {element.cost_in_credits}</p> : <p><strong>Altura</strong> : { element.height.charAt(0).toUpperCase()+ element.height.slice(1)}</p>}</p>
                            <p className="card-text ">{element.gravity ? <p><strong>Población:</strong> {element.population}</p>: element.gender ? <p><strong>Genero:</strong> {element.gender.charAt(0).toUpperCase()+ element.gender.slice(1)}</p>: <p><strong>Constructor</strong>: {element.manufacturer}</p>}</p>                  
                        </div>
                    </div>
                </>      
                )})}
            </div>
        </>    
            )
}