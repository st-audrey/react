import React, { Component } from 'react';
import './App.css';
import './components/HeroButton';
import HeroButton from './components/HeroButton';

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
                <section>
                    <HeroButton/>
                </section>
                <footer></footer>
            </div>
        );

    }
  
}

export default App;
