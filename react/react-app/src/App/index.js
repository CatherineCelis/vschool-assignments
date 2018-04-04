import React from "react";

import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";
// the way we call a component is by using jxs
// we have to do this for every component just the import line above not the importDOM line.
// a component is a function
// we must put our component here, always name your component after your folder name
// in react name all of your component folders 
// this is a constructor function
function App(){
    // const title = ""
    return (
        // this div is like the wrapper for the whole app
        <div>
            {/* header */}
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
            {/* content */}
            {/* footer */}
        </div>
    )
    // we will use jxs to define our element from this component
}
// this says if i import fromthis file this is what gets exported
export default App;
// module.exports for chai and moca
// we need to import and expot our functions now and link them together so that we can use in our other src index.js file.

// now go to the source index and import that from app

