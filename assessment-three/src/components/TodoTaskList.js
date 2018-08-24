import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import TodoTask from './TodoTask'
import List from '@material-ui/core/List'

class TodoTaskList extends Component {
  render(props) {
    var tasks = this.props.tasks
    const { classes } = this.props

    return (
      <List className={classnames(classes.list, {[classes.listItems]: tasks.length > 0})}>
        {tasks === undefined ? tasks = [] : tasks.map(task => {
          return <TodoTask key={task.id}
                           task={task}
                           actions={this.props.actions} />
        })}
      </List>
    )
  }
}
const styles = {
  list: {
    width: '348px',
  },
  listItems: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  }
}
export default withStyles(styles)(TodoTaskList)
