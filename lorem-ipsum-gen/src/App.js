import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Buttons from './components/Buttons';
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
                <Head>
                    <title>Game of Thrones Lorem Ipsum Generator</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
                </Head>
                <h1>Lorem of Thrones</h1>
                <h3>Game of Thrones Lorem Ipsum Generator</h3>
                <Buttons>
                    <button className="btn-stark btn-houses" value="stark"></button>
                    <button className="btn-lannister btn-houses" value="lannister"></button>
                    <button className="btn-targaryen btn-houses" value="targaryen"></button>                  
                </Buttons>
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
