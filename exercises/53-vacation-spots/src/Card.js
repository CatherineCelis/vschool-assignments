import React from "react";
    
function Card(props){
    const styles = {
        backgroundColor: ""
    }
    function changeColor() {
        switch (props.bunny.timeToGo) {
            default:
                styles.backgroundColor = "pink";
                break;
            case "Spring":
                styles.backgroundColor = "yellow";
                break;
            case "Summer":
                styles.backgroundColor = "red";
                break;
            case "Fall":
                styles.backgroundColor = "orange";
                break;
            case "Winter":
                styles.backgroundColor = "grey";
                break;
        }
    };
    changeColor();

let moneySigns = "";
function amountOfSigns(){
    switch (true) {
        default:
            break;
        case props.bunny.price > 1000:
            moneySigns = "$$$";
            break;
        case props.bunny.price < 1000 && props.bunny.price > 500:
            moneySigns = "$$";
            break;
        case props.bunny.price < 500:
            moneySigns = "$";
            break;

    }
}
amountOfSigns();
    return (
        <div className="card" style={styles}>
            <div>
                <img src={props.bunny.imgURL} alt={""}/>
            </div>
            <header>Destination:{props.bunny.place}</header>
            <h1>Price: {props.bunny.price} {moneySigns}</h1>
            <h3>Best time to Visit: {props.bunny.timeToGo}</h3>
            
        </div>

    )
}

export default Card;