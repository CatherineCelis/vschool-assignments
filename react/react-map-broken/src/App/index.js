import React from "react";
// import Component from "./Component";
import FriendsList from "./FriendsList/";

function App() { 
    return (
        <div>
            <FriendsList/>
        </div>
    )
}

export default App;






// const friends = ["Mighty Morphin Power Rangers", "Batman", "WonderWoman", "Cat Woman", "Superman", "John", ]


// const friendsLis = friends.map(function(name) {
//     return <li>{name}</li>
// })

// const friendsLis = friends.map((name, i) => <li key={name + i}>{name}</li>);
// the curly braces make you jump in and out of jxs
// const friendsLis = friends.map((person, i) => <li key={person.name + i}>{person.name} - {person.age}</li>)

        /* <div key={person.name + i}>>
            <h1>Name: {person.name}</h1>
            <h3>Age: {person.age}</h3>
            <hr/>
        </div> */
// function Blog(props) {
//     // console.log(props);
//     const {backgroundColor} = props;
//     const styles = {
//         backgroundColor
//     }
//     return (
//         <div className={"box"} style={styles}>
//             <h1>{props.title}</h1>
//             <h2>{props.subTitle}</h2>
//             <h3>{props.body}</h3>
//             <p>{props.info}</p>
            
//         </div>
//     )
// }

// console.log(friendsLis);