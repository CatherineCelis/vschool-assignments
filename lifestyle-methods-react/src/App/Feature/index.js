import React, { Component } from "react";

class Feature extends Component {
    construtor(props){
        
    }

    componentDidMount(){
        alert("Hey I mounted!")
    }
    componentWillRecieveProps(newProps){
        console.log(newProps);
    }
    render() {
        return(
            <div>
                Feature Component
            </div>
        )
    }
    
}


export default Feature;