import React from 'react';


export default class Todo extends React.Component {
  render() {

    const {name, completed, id} = this.props.todo;
    const {toggleCompletedStatus} = this.props;

    return (
      <div onClick={() => toggleCompletedStatus(id)}>
        {name} {completed && '✓'}
      </div>
    )
    
  }
}
