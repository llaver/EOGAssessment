import React, { Component } from "react"
import classnames from 'classnames'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { Redirect } from 'react-router-dom'

class TodoTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  completeTask() {
    this.props.actions.completeTask(this.props.task.id)
  }

  deleteTask() {
    this.props.actions.deleteTask(this.props.task.id)
  }

  goToDetail = () => {
    this.setState({redirect: true});
  }

  render(props) {
    const { classes } = this.props

    if (this.state.redirect) {
      return <Redirect push to={`/tasks/${this.props.task.id}`}/>;
    }

    return (
      <ListItem onClick={this.goToDetail} key={this.props.task.id}
        className={classnames(classes.listItem, {[classes.complete]: this.props.task.completed})}>
        <ListItemText primary={this.props.task.title} />
        <ListItemSecondaryAction>
          <Button variant='outlined' color='primary'
            className={classnames({[classes.buttonComplete]: this.props.task.completed})}
            onClick={() => this.completeTask()}>Complete</Button>
          <IconButton aria-label="Delete" onClick={() => this.deleteTask()}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
const styles = {
  listItem: {
     border: '0.1rem outset lightgrey',
     borderRadius: '4px',
     margin: '1em',
     width: '20em'
  },
  complete: {
    backgroundColor: '#BDD5BD'
  },
  buttonComplete: {
    backgroundColor: 'grey'
  }
}
export default withStyles(styles)(TodoTask)
