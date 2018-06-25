import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../Constants';

class AnswerBox extends Component {
    constructor(props) { 
        super(props);

        // Binding necessary to handle point 'this' to component
        // in event handler
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <form>
                <input type='text' value={this.props.responseText} />
                <button type="button" onClick={this.handleClick}>Check answer</button>
            </form>
        )
    }

    handleClick(e) {
        e.preventDefault();
        // Call getResult method passed from Question parent
        this.props.getResult();
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