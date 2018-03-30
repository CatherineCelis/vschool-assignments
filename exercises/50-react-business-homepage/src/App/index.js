import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";



function App(){
    // const styles = {};
    // const today = new Date();
    // if(today.getHours() < 10)
    // if(true) {
    //     styles.backgroundColor = "blue";
    // } else {
    //     styles.color = "green";
    // }
    function buttonWasClicked() {
        alert("Button was Clicked");
    }
    return <button onClick={buttonWasClicked}>click</button>
    return (
        
        }
        <div>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}
export default App;