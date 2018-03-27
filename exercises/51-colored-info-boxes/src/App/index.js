import React from "react";
import Blog from "./Blog";

function App(){
    // define our variables to plug in later
    const blogPost1 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "red"
    }
    const blogPost2 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "blue"
    }
    const blogPost3 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "yellow"
    }
    const blogPost4 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "green"
    }
    const blogPost5 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "orange"
    }
    const blogPost6 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "purple"
    }
    const blogPost7 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "pink"
    }
    const blogPost8 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "teal"
    }
    const blogPost9 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "coral"
    }
    const blogPost10 = {
        title: "Please fill in with title",
        subTitle: "Septerber 1, 1990",
        body: "lorem ipsum body here",
        info: "Filler Information",
        backgroundColor: "brown"
    }
    return (
        <div className={"wrapper"}>
            <h3>Little Colored Boxes</h3>
            <Blog {...blogPost1}></Blog>
            <Blog {...blogPost2}></Blog>
            <Blog {...blogPost3}></Blog>
            <Blog {...blogPost4}></Blog>
            <Blog {...blogPost5}></Blog>
            <Blog {...blogPost6}></Blog>
            <Blog {...blogPost7}></Blog>
            <Blog {...blogPost8}></Blog>
            <Blog {...blogPost9}></Blog>
            <Blog {...blogPost10}></Blog>
            
            
        </div> 
    )
}

export default App;