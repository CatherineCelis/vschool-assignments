import React from "react";
import Component from "./Component/";

const friends = [
    {name: "Mighty Morphin' Power Rangers", age: 24},
    {name: "Batman", age: 45},
    {name: "Wonder Woman", age: 300},
    {name: "Cat Woman", age: 26},
    {name: "Superman", age: 30},
    {name: "John", age: 21},
    {name: "Quasimodo", age: 530}
];

function FriendsList(){
    const friendsLis = friends.map((person, i) => <Component key={person.name + i} human={person}></Component>);

    return (
        <div>
            {friendsLis}
        </div>
        
    )
}

export default FriendsList;