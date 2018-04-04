import React from "react";

function Component(props){
    console.log(props.data);
    return(
        <div>
            {/* if its not a string, its a javascript expession  you have to put curly braces around it */}
            {props.data}
            {/* this is my component */}
        </div>

    )
}
export default Component;