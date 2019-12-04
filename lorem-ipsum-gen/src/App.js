import React, { Component } from 'react';
import './App.css';
import HeroButton from './components/HeroButton';
import ParagraphButton from './components/ParagraphButton';
import StartButton from './components/StartButton';

class App extends Component {
    constructor(props) {
        super(props);
       
    }

    state = {
        text: ''
    }

    render() {
       
        return (
            <div className="App">
                <header className="App-header">
                    <p>Lorem Ipsum Gen</p>
                </header>
                <section className="section1">
                    <h2>Choissisez un personnage :</h2>
                    <HeroButton />
                    <h2>Paragraphes :</h2>
                    <ParagraphButton />
                    <h2>Commencer par :</h2>
                    <StartButton />
                </section>
                <footer></footer>
            </div>
        );

    }
  
}

export default App;
