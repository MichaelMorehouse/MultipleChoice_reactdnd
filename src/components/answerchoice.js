import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../Constants';

class AnswerChoice extends Component {

    render () {
        const { connectDragSource } = this.props;
        const choiceStyle = this.props.responseText === this.props.choiceText 
            ? { opacity: 0.5 } : { opacity: 1};

        return connectDragSource(
            <div className='answerChoice' style={ choiceStyle }>{this.props.choiceText}</div>
        );
    }
}

const answerChoiceSource = {
    beginDrag(props) {
        // Dragging item only receives the choiceText property
        return { responseText: props.choiceText };
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