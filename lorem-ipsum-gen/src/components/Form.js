import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

    

    this.state = {
        option1: [
            { id: 1, nom: 'Hero1'},
            { id: 2, nom: 'Hero2' },
            { id: 3, nom: 'Hero3' },
            { id: 4, nom: 'Hero4' },
            { id: 5, nom: 'Hero5' }
        ],

        option2: [
            { id: 1, nom: "1" },
            { id: 2, nom: "2" },
            { id: 3, nom: "3" },
            { id: 4, nom: "4" },
            { id: 5, nom: "5" }
        ],

        option3: [
            { id: 1, nom: 'Lorem ipsum dolor sit amet' },
            { id: 2, nom: 'Quand on joue au jeu des Tr\xF4nes, soit on gagne soit on meurt' },
            { id: 3, nom: 'Les mots de mon personnages' },
        ],

        hero: 'Hero1',
        paragraph: '1',
        start: 'Lorem ipsum dolor sit amet'

        }
    }

    handleHeroChange(event) {        
        this.setState({ hero: event.target.value });
    };

    handleParagraphChange(event) {
        this.setState({ paragraph: event.target.value });
    };

    handleStartChange(event) {
        this.setState({ start: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.hero);
        console.log(this.state.paragraph);
        console.log(this.state.start);
    };

    render() {
        return ( 

            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Choissisez un personnage :</label>
                <div className="inline-b">
                    <select className="select-btn" value={this.state.hero} onChange={this.handleHeroChange.bind(this)}>
                        {this.state.option1.map(option => (
                            <option key={option.id.toString()} value={option.nom}>
                                {option.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <label>Paragraphes :</label>
                <div className="inline-b">
                    <select className="select-btn" value={this.state.paragraph} onChange={this.handleParagraphChange.bind(this)}>
                        {this.state.option2.map(option => (
                            <option key={option.id.toString()} value={option.nom}>
                                {option.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <label>Commencer par :</label>
                <div className="inline-b">
                    <select className="select-btn" value={this.state.start} onChange={this.handleStartChange.bind(this)}>
                        {this.state.option3.map(option => (
                            <option key={option.id.toString()} value={option.nom}>
                                {option.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="submit-form" type="submit">Generer</button>
            </form>
        )
    }
}


export default Form