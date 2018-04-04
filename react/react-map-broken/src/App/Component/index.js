import React from "react";

function Component(props){ 
    return (
        <div key={props.human.name + i}>>
            <h1>Name: {props.human.name}</h1>
            <h3>Age: {props.human.age}</h3>
            <hr/>
        </div> 
    )
}

export default Component;

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

