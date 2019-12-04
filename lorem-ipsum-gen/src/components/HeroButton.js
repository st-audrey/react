import React, { Component } from 'react'

class HeroButton extends Component {


    state = {
        navBtns: [
            { id: 1, nom: 'Choose your hero : ' },
            { id: 2, nom: 'Hero1' },
            { id: 3, nom: 'Hero2' },
            { id: 4, nom: 'Hero3' },
            { id: 5, nom: 'Hero4' }
        ]
    }


    render() {
        return ( 
                  
        <div>
            <select>
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


export default HeroButton