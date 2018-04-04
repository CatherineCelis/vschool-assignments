import React, { Component } from "react";
import List from "./List/";
// const initialState

class Form extends Component {
    // constructor method creates a 
    constructor(props){
        super(props);
        // this.initialInputs = {

        // }
        this.state = {
            // we could put as many inputs as we could possibly dream of
            inputs: {
                // we can use props to set initial state if we want to
                firstName: "",
                email: ""

            },
            people: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
// we want to be able to change the ben input
// we want this function to change when the event listener is trigger
    handleChange(event){
        // take the value from the input and set state accordingly
        const { value, name } = event.target
        console.log(event.target);
        // adding preState is to only change the new changes that you need to
        // prevState is comin from the super class
        this.setState(prevState => {
            return {
                inputs : {
                    // only if its a nested propety that yoiu are trying to access do you then need the following line
                    ...prevState.inputs,
                    [name]: value
                }
                // the line above makes it so its either name value
                // [email]: value
            }
        });
        // console.log(event.target.value);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState(prevState => {
            return {
                // reset the form inputs back to  their original state, and include the new object in an array
                inputs: {
                    firstName: "",
                    email: ""

                }, 
                people: [...prevState.people, prevState.inputs]
            }
        })

    }
    render(){
        // console.log(this.state.inputs);
        const { firstName, email } = this.state.inputs;
        const { people } = this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter Name"/>
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@Email"/>
                <button>Submit</button>
                {/* render a list component, pass into it via props this.state.people, map through each item, and render a person component containing individual info  */}
                {/* <p></p> */}
                <List people={people}></List>
            </form>
        )
    }
}

export default Form;