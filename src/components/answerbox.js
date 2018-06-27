import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes, PlaceholderText } from '../Constants';

class AnswerBox extends Component {
    render() {
        const { connectDropTarget } = this.props;
        const responseOpacity = this.props.responseText === PlaceholderText 
            ? 0.5 : 1;

        return connectDropTarget(
            <div className='answerBox' style={{ opacity: responseOpacity }}>
                {this.props.responseText}
            </div>
        )
    }
}

const answerBoxTarget = {
    canDrop(props, monitor) {
        const item = monitor.getItem();
        return (props.questionId === item.questionId);
    },
    drop(props, monitor, component) {
        const item = monitor.getItem();
        // Lift responseText state to Question parent
        component.props.handleResponseDrop(item.responseText);
        return;
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

export default DropTarget(ItemTypes.ANSWERCHOICE, answerBoxTarget, collect)(AnswerBox);