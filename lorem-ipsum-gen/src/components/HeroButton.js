import React, { Component } from 'react'

class HeroButton extends Component {


    state = {
        navBtns: [
            { id: 1, nom: 'Hero1'},
            { id: 2, nom: 'Hero2' },
            { id: 3, nom: 'Hero3' },
            { id: 4, nom: 'Hero4' },
            { id: 5, nom: 'Hero5' }
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


export default HeroButton