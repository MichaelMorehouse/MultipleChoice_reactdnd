import React, { Component } from 'react';
import './App.css';
import QuestionMap from './components/questionmap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <QuestionMap />
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
