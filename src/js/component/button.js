import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { RiDeleteBin6Line } from 'react-icons/ri';


export const ButtonFlux = () => {
    const {store, actions} = useContext(Context)

    return (

        <div className="dropdown me-4">
            <button className="btn  dropdown-toggle buttonFlux" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
            </button>
            <ul className="dropdown-menu">
                {store.button.map((element, index)=>{return    <li key={index}><a className="dropdown-item" href="#">{element}
                <button onClick={()=> actions.deleteElement(index)} className="btn"><RiDeleteBin6Line /></button>
                </a></li>})}
            </ul>
        </div>

    )
}