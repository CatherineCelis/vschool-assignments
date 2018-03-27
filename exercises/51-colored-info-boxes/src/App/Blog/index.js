import React from "react";

function Blog(props) {
    // console.log(props);
    const {backgroundColor} = props;
    const styles = {
        backgroundColor
    }
    return (
        <div className={"box"} style={styles}>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.body}</h3>
            <p>{props.info}</p>
            
        </div>
    )
}

export default Blog;