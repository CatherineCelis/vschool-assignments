import React from "react";
import Pet from "./Pet/";

function Friend(props) {
    const petList = props.pet.map((animal,i)=>
    <Pet key={animal.name} fury={animal}></Pet>);
        return (
            <div>
                <h1>Name: {props.human.name}</h1>
                <h2>Age: {props.human.age}</h2>
                <h3>All Pets</h3>
                {petList}
                <hr/>
            </div>
        );
}
export default Friend;
