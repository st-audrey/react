import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import GeneratorComponent from './components/GeneratorComponent';
import { words } from './words';



class App extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            
            numParagraphs: 1,
            numSentences: 5,
            text: this.ipsum(1, 5, words)

        };

        this.updateParagraphs = this.updateParagraphs.bind(this); 
        this.updateSentences = this.updateSentences.bind(this);
    }

  
    updateParagraphs(e) {
        this.setState({ numParagraphs: e.target.value }, this.generate);
    }

    updateSentences(e) {
        this.setState({ numSentences: e.target.value }, this.generate);
    }

    generate() {
        this.setState({
            text: this.ipsum(this.state.numParagraphs, this.state.numSentences, words)
        })
    }

    ipsum(numParagraphs, numSentences, phrases) {

        var text = "";
        
        if (numParagraphs < 1) {
            return text;
        }
        for (var i = 0; i < numParagraphs; i++) {
            var paragraph = "";
            for (var j = 0; j < numSentences; j++) {
                var sentence = "";
                var numWords = Math.floor(Math.random() * 6 + 10);
                for (var k = 0; k < numWords; k++) {
                    var words = "";
                    var wordNum = Math.floor(Math.random() * phrases.length);
                    var word = phrases[wordNum];
                    if (k !== 0) {
                        sentence += " ";
                    }
                    sentence += word;
                }
                sentence += ".";
                sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
                paragraph += sentence;
                paragraph += " ";
            }
            paragraph = "<p>" + paragraph + "</p>";
            text += paragraph;
        }
        return text;
    }



    render() {

        return (
            <div className="App">
                <h1>Lorem of Thrones</h1>
                <h3>Game of Thrones Lorem Ipsum Generator</h3>
                <FormComponent
                    updateParagraphs={this.updateParagraphs.bind(this)}
                    updateSentences={this.updateSentences.bind(this)}
                    numParagraphs={this.state.numParagraphs}
                    numSentences={this.state.numSentences}
                />
                <GeneratorComponent text={this.state.text} />
          
            </div>
        );
    }
}


export default App;

/*<form onSubmit={this.handleSubmit.bind(this)}>
<label>Choissisez votre maison:</label>
<div className="inline-b">
    <Select poss={this.state.option1} value={this.state.hero} onChange={this.handleHeroChange.bind(this)}/>
</div>
<label>Paragraphes :</label>
<div className="inline-b">
    <Select poss={this.state.option2} value={this.state.paragraph} onChange={this.handleParagraphChange.bind(this)} />
</div>
<label>Commencer par :</label>
<div className="inline-b">
    <Select poss={this.state.option3} value={this.state.start} onChange={this.handleStartChange.bind(this)} />
</div>
<input className="generator" type="submit" value="Generer" />
</form>
<p value={this.state.result}></p>
</section>
<section className="section2">
<p>oihfoiezhfoi</p>  




                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Choissisez votre maison:</label>
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
                    <input className="generator" type="submit" value="Generer" />
                </form>





*/

/*handleHeroChange(event) {
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
   if (this.state.hero === 'Stark') {


       if (this.state.start === 'Lorem ipsum dolor sit amet') {
           this.setState({ result: "stark lorem" });
       } else if (this.state.start === 'Quand on joue au jeu des Tr\xF4nes, soit on gagne soit on meurt') {
           this.setState({ result: "stark quand on joue" });
       } else if (this.state.start === 'La devise de ma maison') {
           this.setState({ result: "stark winter" });
       }

   } else if (this.state.hero === 'Lannister') {
  

       if (this.state.start === 'Lorem ipsum dolor sit amet') {
           this.setState({ result: "lannister lorem" });
       } else if (this.state.start === 'Quand on joue au jeu des Tr\xF4nes, soit on gagne soit on meurt') {
           this.setState({ result: "lannister quand on joue" });
       } else if (this.state.start === 'La devise de ma maison') {
           this.setState({ result: "lannister winter" });
       }

   } else if (this.state.hero === 'Targaryen') {


       if (this.state.start === 'Lorem ipsum dolor sit amet') {
           this.setState({ result: "targaryen lorem" });
       } else if (this.state.start === 'Quand on joue au jeu des Tr\xF4nes, soit on gagne soit on meurt') {
           this.setState({ result: "targaryen quand on joue" });
       } else if (this.state.start === 'La devise de ma maison') {
           this.setState({ result: "targaryen winter" });
       }

   } else {
       this.setState({ result: "toto" });
   }*/


/*
   option1: [
                { id: 1, nom: 'Stark' },
                { id: 2, nom: 'Lannister' },
                { id: 3, nom: 'Targaryen' },
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
                { id: 3, nom: 'La devise de ma maison' }
            ],
            
hero: 'Stark',
paragraph: '1',
start: 'Lorem ipsum dolor sit amet',
result: ''*/