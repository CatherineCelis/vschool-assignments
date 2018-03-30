import React from "react";

function Pet(props){
    return(
        <ul>
            <li>Name: {props.fury.name}</li>
            <li>Breed: {props.fury.breed}</li>
        </ul>
    )
}

export default Pet;