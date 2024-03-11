import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  
  render() {

    const {todos} = this.props;

    return (
      <div>
        Todos: 
        {todos.map((todo) => {
          <Todo />
        })}
      </div>
    )
  }
}
