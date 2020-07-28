import React from 'react';
import {BrowserRouter,Route , Link}from "react-router-dom";
//BrowserRouter , Link is a react components

const PageOne = ()=>{
    return (<div>
        <Link to="/pagetwo">PageTwo</Link>
    </div>);

}

const PageTwo = ()=>{
    return (<div>
        Page Two
        <button >Click Me</button>
        <Link to="/">PageOne</Link>
        </div>);
}

export const App = ()=>{
return (
    <div>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" exact component={PageTwo}/>
            </div>
        </BrowserRouter>
    </div>
);
}