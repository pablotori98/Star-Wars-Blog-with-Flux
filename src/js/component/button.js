import React from "react";

export const ButtonFlux = () => {


    return (

        <div class="dropdown">
            <button class="btn  dropdown-toggle buttonFlux" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>

    )
}