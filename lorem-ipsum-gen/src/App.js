import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Header from './components/Layouts/Header';
import FormComponent from './components/FormComponent';
import GeneratorComponent from './components/GeneratorComponent';
import Footer from './components/Layouts/Footer';
import Container from '@material-ui/core/Container';
import { words } from './words';


/*TODO*/

//enlever les tags <p>texte-copié</p>
//changer dynamiquement la classe du btn-copy pour état onClick
//


class App extends Component {
    constructor(props) {
        super(props);   
        this.state = {            
            numParagraphs: 1,
            numSentences: 1,
            text: this.ipsum(1, 1, words),
            stark: "btn-stark btn-houses",
            lannister: "btn-lannister btn-houses",
            targaryen: "btn-targaryen btn-houses"
        };

        this.updateParagraphs = this.updateParagraphs.bind(this); 
        this.updateSentences = this.updateSentences.bind(this);
    }

    handleCopy() {
        var text = document.getElementById("generated-txt-hidden");      
        text.select();
        document.execCommand("copy");
    }

    handleClick(e) {   
        var myAudio = document.getElementById("myAudio");       
        var house = e.target.value;
        if (house === "stark") {
            myAudio.play();
            this.setState({ stark: "btn-stark-active btn-houses" });
            this.setState({ lannister: "btn-lannister btn-houses" });
            this.setState({ targaryen: "btn-targaryen btn-houses" });

        } else if (house === "lannister") {
            myAudio.play();
            this.setState({ stark: "btn-stark btn-houses" });
            this.setState({ lannister: "btn-lannister-active btn-houses" });
            this.setState({ targaryen: "btn-targaryen btn-houses" });

        } else {
            myAudio.play();
            this.setState({ stark: "btn-stark btn-houses" });
            this.setState({ lannister: "btn-lannister btn-houses" });
            this.setState({ targaryen: "btn-targaryen-active btn-houses" });
        }      
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
                var numWords = Math.floor(Math.random() * 2 + 10);
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
                <Header />
                <Container maxWidth="xl">
                    <h1 className="title-main">Lorem of Thrones</h1>
                    <h3 className="title-sub">Game of Thrones Lorem Ipsum Generator</h3>

                    <audio id="myAudio"><source src="sounds/btn.mp3" type="audio/mpeg"></source></audio>
                    <button className={this.state.stark} type="radio" value="stark" onClick={this.handleClick.bind(this)}></button>
                    <button className={this.state.lannister} type="radio" value="lannister" onClick={this.handleClick.bind(this)}></button>
                    <button className={this.state.targaryen} type="radio" value="targaryen" onClick={this.handleClick.bind(this)}></button>                  
                    
                    <FormComponent
                        updateParagraphs={this.updateParagraphs.bind(this)}
                        updateSentences={this.updateSentences.bind(this)}
                        numParagraphs={this.state.numParagraphs}
                        numSentences={this.state.numSentences}
                    />                  
                    <GeneratorComponent text={this.state.text} />      
                    <div class="wrap">
                        <button className="btn-copy" onClick={this.handleCopy.bind(this)}>Copier</button>
                    </div>
                </Container>    
                
                <Footer />
            </div>
        );
    }
}


export default App;
