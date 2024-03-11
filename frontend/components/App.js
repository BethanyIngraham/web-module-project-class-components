import React from 'react';
import Form from './Form';
import TodoList from './TodoList';


const todoTasks = [
  {name: 'Take out the trash', id: 1234567, completed: false},
  {name: 'Wash the dishes', id: 9287635, completed: false},
  {name: 'Laundry', id: 1673542, completed: false},
  {name: 'Water the lawn', id: 8854276, completed: false},
  {name: 'Bring back Library book', id: 2754983, completed: false}
]

export default class App extends React.Component {

  state = {
    todos: todoTasks
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <Form />
      </div>
    )
  }
}
