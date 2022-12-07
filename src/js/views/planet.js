import { element } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {

    const params = useParams ()
    const {actions, store} = useContext(Context)

    useEffect(()=>{
        actions.loadPlanetsById(params.idplanet)
        },[])

        return (
        
            <div className="jumbotron d-flex container">
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + ((params.idplanet)) + ".jpg"}/>
                <div className="p-4">
                    <h1 className="display-4">{store.planet.name}</h1>
                    <p className="lead"><strong>Gravedad: </strong>{store.planet.gravity}</p>
                    <p className="lead"><strong>Población: </strong>{store.planet.population} habitantes</p>
                    <p className="lead"><strong>Periodo de rotación: </strong>{store.planet.rotation_period} días</p>
                    <p className="lead"><strong>Clima: </strong>{store.planet.climate}</p>
                    <p className="lead"><strong>Terreno: </strong>{store.planet.terrain}</p>
                </div>
            </div>

            
        )

}