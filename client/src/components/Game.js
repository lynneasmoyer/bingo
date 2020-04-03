import React from 'react';
import ReactDOM from 'react-dom';
import Images from "./Images.js";

class Game extends React.Component {
    

render() {
    Images.map((id, src, title, description) => {
    return (
        <div class= "gameboard">
            <h1>Bingo</h1>
            
                <div>
                    <table role='grid'>
                        <tbody>
                            <tr role='row'>
                                <td role='gridcell'> <img key={id} src={src} title={title} alt={description}) /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
        </div>
        
    }  

}

    }
};

export default Game;