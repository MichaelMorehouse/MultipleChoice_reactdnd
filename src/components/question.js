import React, { Component } from 'react';
import AnswerBox from './answerbox';
import AnswerChoice from './answerchoice';
import { PlaceholderText } from '../Constants';

export default class Question extends Component {
    constructor(props) {
        super(props);
        // Question component handles all related state
        this.state = {
            responseText: PlaceholderText,
            responseSubmitted: false,
            answeredCorrectly: false,
            incorrectAnswerCount: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleResponseDrop = this.handleResponseDrop.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    render () {
        return (
            <div>
                <p>{this.props.questionText}</p>
                <AnswerBox
                    questionId={this.props.questionId}
                    responseText={this.state.responseText}
                    getResult={this.getResult}
                    handleResponseDrop={this.handleResponseDrop}
                />
                {this.renderAnswerChoices()}
                <button type='button' onClick={this.handleClick}>Check it</button>
            </div>
        );
    }

    renderAnswerChoices() {
        const answerChoiceMap = this.props.answerChoices.map(choiceText =>{
            return (
                <AnswerChoice 
                    key={choiceText} 
                    questionId={this.props.questionId}
                    choiceText={choiceText}
                    responseText={this.state.responseText}
                />
            );
        });

        return answerChoiceMap;
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
            // TODO Bug with async count update
            if (this.state.incorrectAnswerCount > 1) {
                alert("Need a hint?");
            }
        }
        this.setState({responseText: PlaceholderText})
    }
    
    handleClick(e) {
        e.preventDefault();
        this.getResult();
    }

    // Changes question state based on response drop in AnswerBox
    handleResponseDrop(responseText) {
        this.setState({responseText: responseText});
    }
}