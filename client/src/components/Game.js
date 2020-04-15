import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Board from "./Board";
import akita from "../images/akita.jpg";
import aussie from "../images/Australian-Shepherd.jpg";
import beagle from "../images/beagle.jpg";
import bernese from "../images/Bernese.jpg";
import chow from "../images/ChowChow.jpg";
import spaniel from "../images/Cocker-Spaniel.jpg";
import dachshund from "../images/Dachshund.jpg";
import frenchie from "../images/frenchbulldog.jpg";
import german from "../images/German-Shepherd.jpg";
import goldie from "../images/GoldenRetriever.jpg";
import greatdane from "../images/GreatDane.jpg";
import greyhound from "../images/Greyhound.jpg";
import husky from "../images/husky.jpg";
import lab from "../images/Lab.jpg";
import shiba from "../images/shiba2.jpg";
import boston from "../images/boston.jpg";
import boxer from "../images/boxer.jpg";
import chihuahua from "../images/Chihuahua.jpg";
import corgi from "../images/corgi.jpg";
import dalmatian from "../images/dalmatian.jpg";
import heeler from "../images/heeler.jpg";
import poodle from "../images/poodle.jpg";
import basset from "../images/basset.jpg";
import collie from "../images/collie.jpg";
import mastiff from "../images/mastiff.jpg";
import sheepdog from "../images/sheepdog.jpg";


const dogs = [
    akita, 
    aussie, 
    basset, 
    beagle, 
    boston, 
    boxer, 
    chihuahua, 
    chow, 
    spaniel, 
    collie, 
    corgi, 
    dachshund, 
    dalmatian, 
    bernese, 
    poodle, 
    heeler, 
    mastiff, 
    sheepdog, 
    frenchie, 
    german, 
    goldie, 
    greatdane, 
    greyhound, 
    husky, 
    lab, 
    shiba,
];


function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const shuffledDogs = shuffleArray(dogs)



const Game = ({handleClick}) => {

        return (
            <div className= "gameboard">
                            <div>
                                <table role='grid' className="table">
                                    <tbody>
                                        <tr role= 'row'>
                                            <td role='gridcell'> <img  onClick={handleClick} src= {shuffledDogs[0]} alt= "" />  </td>
                                            <td role='gridcell'>  <img className = "notSelected" onClick={handleClick} src= {shuffledDogs[1]} alt= "" /> </td>
                                            <td role='gridcell'> <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[2]} alt= "" />  </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[3]} alt= "" />  </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[4]} alt= "" /> </td>
                                        </tr>
                                        <tr role= 'row'>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[5]} alt= "" /> </td>
                                            <td role='gridcell'>  <img className = "notSelected" onClick={handleClick} src= {shuffledDogs[6]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[7]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[8]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[9]} alt= "" /> </td>
                                        </tr>
                                        <tr role= 'row'>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[10]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[11]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[12]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[13]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[14]} alt= "" /> </td>
                                        </tr>
                                        <tr role= 'row'>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[15]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[16]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[17]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[18]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[19]} alt= "" /> </td>
                                        </tr>
                                        <tr role= 'row'>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[20]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[21]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[22]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[23]} alt= "" /> </td>
                                            <td role='gridcell'>  <img  className = "notSelected" onClick={handleClick} src= {shuffledDogs[24]} alt= "" /> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>

        );
    }


// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//         }
//     }
//     return null;
// }


export default Game;