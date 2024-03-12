import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

  state = {
    showAllTodos: true
  }

  toggleShowAllTodos = () => {
    this.setState({
      ...this.state,
      showAllTodos: !this.state.showAllTodos
    })
  }
  
  render() {

    const {todos, toggleCompletedStatus} = this.props;
    const filtered = todos.filter(td => !td.completed || this.state.showAllTodos);

    return (
      <div> 
        {
        filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompletedStatus={toggleCompletedStatus}/>
        ))
        }
        <button onClick={this.toggleShowAllTodos}>{this.state.showAllTodos ? 'Hide Completed' : 'Show All'}</button>
      </div>
    )

  }
}
