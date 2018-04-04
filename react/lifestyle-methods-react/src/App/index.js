import React, { Component } from "react";
import Feature from "./Feature/";

class App extends Component {
    construtor(props){
        this.state = {
            stopwatch: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                return {
                    stopwatch: prevState.stopwatch + 1
                }
            })
        }, 1000);
    }
    return (
        <div>test</div>
    )
}

export default App; 