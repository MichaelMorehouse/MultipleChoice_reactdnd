import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes, PlaceholderText } from '../Constants';

class AnswerBox extends Component {
    render() {
        const { connectDropTarget } = this.props;
        const responseStyle = this.props.responseText === PlaceholderText 
            ? { opacity: .5 } : { opacity: 1 };

        return connectDropTarget(
            <div className='answerBox' style={ responseStyle }>
                {this.props.responseText}
            </div>
        )
    }
}

const answerBoxTarget = {
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