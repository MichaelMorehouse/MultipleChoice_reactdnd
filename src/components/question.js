import React, { Component } from 'react';
import AnswerChoiceMap from './answerchoicemap';
import AnswerBox from './answerbox';

export default class Question extends Component {
    constructor(props) {
        super(props);
        // Question component handles all related state
        this.state = {
            responseText: "",
            responseSubmitted: false,
            answeredCorrectly: false,
            incorrectAnswerCount: 0,
        }
        this.handleResponseDrop = this.handleResponseDrop.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    render () {
        return (
            <div>
                <p>{this.props.questionText}</p>
                <AnswerBox
                    responseText={this.state.responseText}
                    getResult={this.getResult}
                    handleResponseDrop={this.handleResponseDrop}
                />
                <AnswerChoiceMap 
                    answerChoices={this.props.answerChoices}
                    responseText={this.state.responseText}
                />
            </div>
        );
    }

    // Checks for correct response in AnswerBox after AnswerBox 
    // submit button click event
    getResult() {
        this.setState({responseSubmitted: true});
        if(this.state.responseText === this.props.correctChoice) {
            this.setState({answeredCorrectly: true});
            alert("You got it!")
        } else {
            this.setState(prevState => ({ 
                incorrectAnswerCount: prevState.incorrectAnswerCount + 1
            }));
            // Bug with async count update
            if (this.state.incorrectAnswerCount > 1) {
                alert("Need a hint?");
            }
        }
        this.setState({responseText: ""})
    }
    
    // Changes question state based on response drop in AnswerBox
    handleResponseDrop(responseText) {
        this.setState({responseText: responseText});
    }
}