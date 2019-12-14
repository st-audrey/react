import React, { Component } from 'react';

class GeneratorComponent extends Component {

    render() {
        return (
            <div>
                <div id="generated-txt" className="generated-txt" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
                <input id="generated-txt-hidden" type="text" value={this.props.text} readOnly></input>
            </div>
        )
    }
}

export default GeneratorComponent;