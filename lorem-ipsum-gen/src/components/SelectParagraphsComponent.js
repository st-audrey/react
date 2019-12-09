import React, { Component } from 'react';

class SelectParagraphsComponent extends Component {

    render() {
        return (
            <div>             
                <label>Nombre de paragraphe :</label>
                <select className="select-btn" value={this.props.numParagraphs} onChange={this.props.updateParagraphs}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>               
            </div>
        )
    }
}

export default SelectParagraphsComponent;