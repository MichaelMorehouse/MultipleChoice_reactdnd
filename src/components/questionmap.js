import React, {Component} from 'react';
import Question from './question';

export default class QuestionMap extends Component {
    render() {

        // Dummy data
        const questions = [
            { 
                _id: 1,
                questionText: "What is your favorite color?", 
                answerChoices: ['red','green','blue','yellow','purple'],
                correctChoice: 'green'
            },
            {
                _id: 2,
                questionText: "What did you have for breakfast?",
                answerChoices: ['eggs','granola','coffee','nothing','oatmeal'],
                correctChoice: 'eggs'
            }
        ]

        // Create an array of Questions from an array of Question models 
        const questionMap = questions.map((question) =>{
            return (
                <Question 
                    key={question._id}
                    questionId={question._id}
                    questionText={question.questionText}
                    answerChoices={question.answerChoices}
                    correctChoice={question.correctChoice}
                />
            );
        });

        return (
            <div>{questionMap}</div>
        );
    }
}