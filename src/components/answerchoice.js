import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../Constants';

class AnswerChoice extends Component {

    render () {
        const { connectDragSource } = this.props;
        const choiceOpacity = this.props.responseText === this.props.choiceText 
            ? 0.5 : 1;

        return connectDragSource(
            <div className='answerChoice' style={{ opacity: choiceOpacity }}>{this.props.choiceText}</div>
        );
    }
}

const answerChoiceSource = {
    beginDrag(props) {
        return { responseText: props.choiceText, questionId: props.questionId };
    },

    endDrag(props, monitor, component) {
        if(monitor.didDrop()) {
            // console.log("Successful drop");
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

export default DragSource(ItemTypes.ANSWERCHOICE, answerChoiceSource, collect)(AnswerChoice);