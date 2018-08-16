import React, { Component } from "react"
import TodoTask from './TodoTask'
import List from '@material-ui/core/List'

class TodoTaskList extends Component {

  render(props) {
    var tasks = this.props.tasks;

    var listStyle = {
      width: '348px'
    }
    if(this.props.tasks !== undefined) {
      listStyle = {
        width: '348px',
        boxShadow: this.props.tasks.length >= 1 ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : 'none'
      }
    }

    return (
      <List className="taskList" style={listStyle}>
        {tasks === undefined ? tasks = [] : tasks.map(task => {
          return <TodoTask key={task.id}
                           task={task}
                           actions={this.props.actions} />
        })}
      </List>
    )
  }
}

export default TodoTaskList
