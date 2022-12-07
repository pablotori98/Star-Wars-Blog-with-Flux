import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Favourites = () => {
    const {actions, store} = useContext(Context)

    useEffect(()=>{

    },[])
        return (
        <>
            <div className="d-flex flex-wrap justify-content-center container">
                {store.button && store.button.map((element,index)=>{return (
                <>
                    <div className="card m-2" style={{width: "18rem"}}  >
                        <div className="card-body text-center">
                            <h5 className="card-title">{element.gravity ? element.name: element.manufacturer ? element.name : element.name } <button className="btn ms-1 p-1" onClick={()=> actions.deleteElement(index)}><i class="fas fa-trash"></i></button></h5>
                            <p className="card-text ">{element.gravity ? <p><strong>Gravedad</strong> : {element.gravity}</p>: element.manufacturer ? <p><strong>Longitud</strong>: {element.length.charAt(0).toUpperCase()+ element.length.slice(1)}</p> : <p><strong>Color de pelo:</strong> {element.hair_color.charAt(0).toUpperCase()+ element.hair_color.slice(1)}</p>}</p>
                            <p className="card-text ">{element.gravity ? <p><strong>Periodo de rotación</strong>: {element.rotation_period.charAt(0).toUpperCase()+ element.rotation_period.slice(1)} días</p>: element.cost_in_credits ? <p><strong>Coste en creditos:</strong> {element.cost_in_credits.charAt(0).toUpperCase()+ element.cost_in_credits.slice(1)}</p> : <p><strong>Altura</strong> : { element.height.charAt(0).toUpperCase()+ element.height.slice(1)} cm</p>}</p>
                            <p className="card-text ">{element.gravity ? <p><strong>Población:</strong> {element.population} habitantes</p>: element.gender ? <p><strong>Genero:</strong> {element.gender.charAt(0).toUpperCase()+ element.gender.slice(1)}</p>: <p><strong>Constructor</strong>: {element.manufacturer.charAt(0).toUpperCase()+ element.manufacturer.slice(1)}</p>}</p>                  
                        </div>
                    </div>
                </>      
                )})}
            </div>
        </>    
            )
}