/**
 * HMR - Hot Module Replacement
 * File watcher algorithm
 * Bundling
 * Minify
 * cleaning our code
 * dev and production build
 * super fast build algorithm
 * Image optimization
 * Caching while development
 * compatable with older version of browser
 * HTTPS on dev
 * manage port number
 * consistent Hashing Algorithm
 * Zero config bundler
 * Tree shaking - removing unwanted code
 * Transitive Dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";


const Title = ()=> (<div key='div'>
    <h1 key="h1" tabIndex='1'>Heading</h1>
   
</div>)

const HeaderComponent = ()=>{
return (
<div key='div'>
    <Title/>
    <h1 key="h1" tabIndex='1'>body</h1>
    <div>navigarion</div>
</div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent/>)
