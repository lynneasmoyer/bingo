import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import Game from '../components/Game';


const Main = (props) => {
    
    const handleClick = (e) => {
        if(e.target.style.backgroundColor == "green") {
            e.target.setAttribute( "style", "background-color: white")
        }
        else{
            e.target.setAttribute( "style", "background-color: green")
        } 
        
    }

    return(
        
        <div className= "container">
            <div className="jumbotron">
                <h1 className="display-5 text-center">FIND FIDO</h1>
                <hr className="my-4"></hr>
                <p className= "lead text-center">The Dog Bingo Game</p>
            </div>
        <Game
            handleClick= {handleClick}
        />
    
        </div>
    );
}


export default Main;