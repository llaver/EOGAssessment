import React, { Component } from "react"
import TodoTask from './TodoTask'
import List from '@material-ui/core/List'

class TodoTaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: this.props.tasks
    }
  }

  componentWillReceiveProps(props) {
    this.setState({tasks: props.tasks})
  }

  render(props) {
    var tasks = this.state.tasks;

    var listStyle = {
      width: '348px',
      boxShadow: this.state.tasks.length >= 1 ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : 'none',
    }

    return (
      <List className="taskList" style={listStyle}>
        {tasks.map(task => {
          return <TodoTask key={task.id}
                           task={task}
                           actions={this.props.actions} />
        })}
      </List>
    )
  }
}

export default TodoTaskList
