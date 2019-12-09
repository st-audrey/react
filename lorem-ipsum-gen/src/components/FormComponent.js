import React, { Component } from 'react';
import ParagraphSelectComponent from './SelectParagraphsComponent';
import SentenceSelectComponent from './SelectSentencesComponent';

class FormComponent extends Component {

    render() {
        return (
            <div>
                <form action="">
                    <ParagraphSelectComponent updateParagraphs={this.props.updateParagraphs} numParagraphs={this.props.numParagraphs} />
                    <SentenceSelectComponent updateSentences={this.props.updateSentences} numSentences={this.props.numSentences}/>
                </form>
            </div>
        )
    }
}

export default FormComponent;