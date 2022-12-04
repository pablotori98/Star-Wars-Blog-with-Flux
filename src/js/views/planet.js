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
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </div>

            
        )

}