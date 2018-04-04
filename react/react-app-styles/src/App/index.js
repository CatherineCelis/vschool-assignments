import React from "react";
import Component from "./Component/";

function App(){
    const data = {
        test: "test"
    }
    // const divStyles = {
    //     display: "flex",
    //     justifyContent: "space-around"
    // }
    return(
        /* <div className="wrapper"> */
        /* <div style={{displey: "flex", justifyContent: "space-around" }}> */
        <div className={"wrapper"}>
            <h1>Number 1</h1>
            <Component data="this is some data
            "></Component>
            <h1>Number 2</h1>
        </div>

    )
}
export default App;