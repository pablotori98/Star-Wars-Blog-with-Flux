import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {

    const params = useParams()
    const {actions, store} = useContext(Context)

    useEffect(()=>{
        actions.loadCharactersById(params.idcharacter)
    },[])

    return (

        <div className="jumbotron d-flex container">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + ((params.idcharacter)) + ".jpg"}/>
            <div className="p-4">
                <h1 className="display-4">{store.character.name}</h1>
                <p className="card-text "><strong> Altura:</strong> {store.character.height}</p>
                <p className="card-text "> {store.character.hair_color === "n/a" ? null :  <p><strong>Color de pelo:</strong> {store.character.hair_color}</p>}</p>
                <p className="card-text "> {store.character.gender === "n/a" ? null :  <p><strong>Genero:</strong> {store.character.gender}</p>}</p>
                <p className="card-text "> {store.character.birth_year === "n/a" ? null :  <p><strong>Año de nacimiento:</strong> {store.character.birth_year}</p>}</p>
                <p className="card-text "> {store.character.skin_color === "n/a" ? null :  <p><strong>Color de piel:</strong> {store.character.skin_color}</p>}</p>
                <p className="card-text "> {store.character.mass === "n/a" ? null :  <p><strong>Peso:</strong> {store.character.mass}</p>}</p>

                <p className="card-text "><strong>Color de ojos:</strong> {store.character.eye_color}</p>

            </div>
        </div>
    )
}


// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export const Character = () => {

//     const [people, setPeople] = useState({})
//     const params = useParams()


//     useEffect(()=>{
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//           };
          
//           fetch("https://swapi.dev/api/people/"+params.idCharacter, requestOptions)
//             .then(response => response.json())
//             .then(people => setPeople(people))
//             .catch(error => console.log('error', error));

//         },[])


//     return (

//         <div className="jumbotron d-flex container">
//             <img src={"https://starwars-visualguide.com/assets/img/characters/" + ((params.idCharacter)) + ".jpg"}/>
//             <div className="p-4">
//                 <h1 className="display-4">{people.name}</h1>
//                 <p className="card-text "><strong> Altura:</strong> {people.height}</p>
//                 <p className="card-text "><strong>Color de pelo:</strong> {people.hair_color}</p>
//                 <p className="card-text "><strong>Genero:</strong> {people.gender}</p>
//             </div>
//         </div>
//     )
// }