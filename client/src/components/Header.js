import React from 'react';
import {Link} from 'react-router-dom';
import {GoogleAuth} from './GoogleAuth';

export const Header = ()=>{
    return (
        <div className="ui secoundary pointing menu">
            <Link to="/" className="item"> Streamer </Link>
            <div className="right menu">
            <Link to="/" className="item"> All Streams </Link>
            <GoogleAuth/>
            </div>
        </div>

    )
}