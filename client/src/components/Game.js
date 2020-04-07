import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Images from './Images';
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



const dogs = 
[
    akita, aussie, basset, beagle, bernese, boston, boxer, chihuahua, chow, spaniel
]
    


class Game extends React.Component {
    


render() {
    return (
        <div class= "gameboard">
            <h1>Bingo</h1>
                { dogs.map ((dog, i) => {
                    return (
                        <div>
                            <table role='grid'>
                                <tbody>
                                    <tr role= 'row'>
                                        <td role='gridcell'> <img key = {i} src= {dog} /> </td>
                                        <td role='gridcell'> <img key = {i+1} src= {dog} /> </td>
                                        <td role='gridcell'> <img key = {i} src= {dog} /> </td>
                                        <td role='gridcell'> <img key = {i} src= {dog} /> </td>
                                        <td role='gridcell'> <img key = {i} src= {dog} /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
            
                    );
                })}
            </div>
    )


                            {/* <tr role='row'>
                                <td role='gridcell'> Akita <img src={akita} alt= ""/> </td>
                                <td role='gridcell'> <img src={aussie} alt= ""/> </td>
                                <td role='gridcell'> <img src={beagle} alt= ""/> </td>
                                <td role='gridcell'> <img src={dachshund} alt= ""/> </td>
                                <td role='gridcell'> <img src={frenchie} alt= ""/> </td>
                            </tr>
                            <tr role='row'>
                                <td role='gridcell'> <img src={bernese} alt= ""/> </td>
                                <td role='gridcell'> <img src={chow} alt= ""/> </td>
                                <td role='gridcell'> <img src={spaniel} alt= ""/> </td>
                                <td role='gridcell'> <img src={german} alt= ""/> </td>
                                <td role='gridcell'> <img src={goldie} alt= ""/> </td>
                            </tr>
                            <tr role='row'>
                                <td role='gridcell'> <img src={greatdane} alt= ""/> </td>
                                <td role='gridcell'> <img src={husky} alt= ""/> </td>
                                <td role='gridcell'> <img src={shiba} alt= ""/> </td>
                                <td role='gridcell'> <img src={lab} alt= "" /> </td>
                                <td role='gridcell'> <img src={greyhound} alt= ""/> </td>
                            </tr>
                            <tr role='row'>
                                <td role='gridcell'> <img src={boston} alt= ""/> </td>
                                <td role='gridcell'> <img src={collie} alt= ""/> </td>
                                <td role='gridcell'> <img src={chihuahua} alt= ""/> </td>
                                <td role='gridcell'> <img src={dalmatian} alt= ""/> </td>
                                <td role='gridcell'> <img src={heeler} alt= "" /> </td>
                            </tr>
                            <tr role='row'>
                                <td role='gridcell'> <img src={poodle} alt= "" /> </td>
                                <td role='gridcell'> <img src={sheepdog} alt= ""/> </td>
                                <td role='gridcell'> <img src={corgi} alt= ""/> </td>
                                <td role='gridcell'> <img src={basset} alt= ""/> </td>
                                <td role='gridcell'> <img src={mastiff} alt= ""/> </td>
                            </tr> */}
                        {/* </tbody>
                    </table>
                </div>
        </div>
    ) */}

    
    }
}


export default Game;