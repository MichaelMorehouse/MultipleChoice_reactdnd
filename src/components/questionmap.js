import React, {Component} from 'react';
import Question from './question';

export default class QuestionMap extends Component {
    render() {

        const questions = [
            { 
                questionText: "What is your favorite color?", 
                answerChoices: ['red','green','blue','yellow','purple'],
                correctChoice: 'green'
            },
            {
                questionText: "What did you have for breakfast?",
                answerChoices: ['eggs','granola','coffee','nothing','oatmeal'],
                correctChoice: 'eggs'
            }
        ]

        const questionMap = questions.map((question) =>{
            return (
                <div>
                    <Question 
                        key={question.questionText}
                        questionText={question.questionText}
                        answerChoices={question.answerChoices}
                        correctChoice={question.correctChoice}
                    />
                </div>
            );
        });

        return (
            <div>{questionMap}</div>
        );
    }
}