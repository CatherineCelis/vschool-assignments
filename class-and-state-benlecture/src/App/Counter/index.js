import React, { Component } from "react";
// the above is a specific propertY in the react script
// we are creating a class, (es 6 syntax for a constructor function)
// this is the syntax for a react class based component
// every react component needs to have the built in extends method inherited from the super class of REACT.
// if i am planning on using state, I have got to use a class, if data is going to be changing often because of the user messing with button on the page or if I want to manually set some terms or conditions that influenece the datas way of changing then we must use a class as opposed to a function based component
class Counter extends Component {
    constructor(props){
        super(props);
        // this.state = initialState;
        
        // we have to define what this data is
        this.state = {
            // counter: 65478329
            counter: 0
            // counter: props.initialCount
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.reset = this.reset.bind(this);
        // to bind the function incrementCounter to the class
        
        // this is where you define static properties
    }
    // putting on a new shirt below
    incrementCounter(){
    // tell react what the new state should look like
        // this.setState({
        //     counter: 1
        // });
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });

    }
    reset(){
        this.setState({
            counter: 0
        });
    }
    // this area defines method,severy single thing needs to have a render method
    // its job is to return react elements/or componets
    
    // this is referring to the main component
    render(){
        const{ counter } = this.state;
        return (
            <div>
                <h1>{counter}</h1>
                {/* <h1>{this.state.counter}</h1> */}
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )

    }
}

export default Counter;