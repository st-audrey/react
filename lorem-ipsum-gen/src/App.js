import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';


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
                    <h1>Game of Thrones</h1>
                    <h3>Lorem Ipsum Generator</h3>
                </header>
                <section>
                    <Form/>
                </section>
                <section className="section2">
                    <p>oihfoiezhfoi</p>
                </section>
                <footer></footer>
            </div>
        );

    }
  
}

export default App;
