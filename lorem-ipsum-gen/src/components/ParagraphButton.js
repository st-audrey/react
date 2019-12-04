import React, { Component } from 'react'

class ParagraphButton extends Component {


    state = {
        navBtns: [
            { id: 1, nom: "1"},
            { id: 2, nom: "2"},
            { id: 3, nom: "3"},
            { id: 4, nom: "4"},
            { id: 5, nom: "5"}
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


export default ParagraphButton