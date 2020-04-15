import React from 'react';

//images
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

class Game extends React.Component {


    handleClick() {
        
    }
    
render() {
    const shuffledDogs = shuffleArray(dogs)
    return (
    <div class= "container">
        <div class="jumbotron">
            <h1 class="display-5 text-center">DINGO</h1>
            <hr class="my-4"></hr>
            <p class= "lead text-center">The Dog Bingo Game</p>
        </div>
        <div class= "gameboard">
            
                        <div>
                            <table role='grid' class="table">
                                <tbody>
                                    <tr role= 'row'>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[0]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[1]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[2]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[3]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[4]} alt= "" /> </td>
                                    </tr>
                                    <tr role= 'row'>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[5]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[6]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[7]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[8]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[9]} alt= "" /> </td>
                                    </tr>
                                    <tr role= 'row'>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[10]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[11]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[12]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[13]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[14]} alt= "" /> </td>
                                    </tr>
                                    <tr role= 'row'>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[15]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[16]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[17]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[18]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[19]} alt= "" /> </td>
                                    </tr>
                                    <tr role= 'row'>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[20]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[21]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[22]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[23]} alt= "" /> </td>
                                        <td role='gridcell'>  <img  src= {shuffledDogs[24]} alt= "" /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
    )

}}

export default Game;