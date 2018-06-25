import React, { Component } from 'react';
import AnswerChoice from './answerchoice';

export default class AnswerChoiceMap extends Component {
    
    render () {
        const choiceMap = this.props.answerChoices.map(choice =>{
            return (
                <ul>
                    <li>
                        <AnswerChoice 
                            key={choice} 
                            choiceText={choice}
                            responseText={this.props.responseText}
                        />
                    </li>
                </ul>
            );
        });

        return <div>{choiceMap}</div>;
    }
}

