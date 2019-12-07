import React, { Component } from 'react';

class GeneratorComponent extends Component {


    render() {

        return (
            <div className="result" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
        )
    }
}


export default GeneratorComponent;