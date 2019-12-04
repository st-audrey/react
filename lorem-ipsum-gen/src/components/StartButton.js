import React, { Component } from 'react'

class StartButton extends Component {


    state = {
        navBtns: [
            { id: 1, nom: 'Lorem ipsum dolor sit amet'},
            { id: 2, nom: 'Quand on joue au jeu des Tr\xF4nes, soit on gagne soit on meurt'},
            { id: 3, nom: 'Les mots de mon personnages'},
        ]
    }


    render() {
        return ( 
                  
            <div>
                <select className="select-btn">
                {this.state.navBtns.map(navBtn => (
                    <option key={navBtn.id.toString()} value={navBtn.nom}>
                        {navBtn.nom}
                    </option>
                ))}                   
            </select>
        </div>
        )
    }
}


export default StartButton