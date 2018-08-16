import React, { Component } from "react"
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class TodoTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.task.completed
    }
  }

  completeTask() {
    this.setState({
      complete: true
    })

    this.props.actions.completeTask(this.props.task.id)
  };

  deleteTask() {
    this.props.actions.deleteTask(this.props.task.id)
  }

  render(props) {
    var listItemStyle = {
       backgroundColor: this.state.complete ? '#BDD5BD' : 'none',
       border: '0.1rem outset lightgrey',
       borderRadius: '4px',
       margin: '1em',
       width: '20em'
    }

    return (
      <ListItem key={this.props.task.id} style={listItemStyle}>
        <ListItemText primary={this.props.task.title} />
        <ListItemSecondaryAction>
          <Button variant='outlined' color='primary'
            style={{backgroundColor: this.state.complete ? 'grey' : 'none' }}
            onClick={() => this.completeTask()}>Complete</Button>
          <IconButton aria-label="Delete" onClick={() => this.deleteTask()}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
export default TodoTask
