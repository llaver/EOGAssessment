import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import { Field, Form, reduxForm, change } from "redux-form"
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'

class TaskDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    this.updateTask = this.updateTask.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(this.props.task && prevProps.task !== this.props.task) {
      this.props.dispatch(change('taskDetail', 'title', this.props.task.title))
      this.props.dispatch(change('taskDetail', 'description', this.props.task.description))
    }
  }

  updateTask(values) {
		if(values.title !== "") {
      this.props.actions.updateTask(this.props.id, Object.assign({}, this.props.task, {
        title: values.title,
        description: values.description
      }))
		}
    this.setState({redirect: true})
	}

  resetForm() {
    this.props.dispatch(change('taskDetail', 'title', this.props.task.title))
    this.props.dispatch(change('taskDetail', 'description', this.props.task.description))
  }

  completeTask() {
    this.props.actions.completeTask(this.props.id)
    this.setState({redirect: true})
  }

  deleteTask() {
    this.props.actions.deleteTask(this.props.id)
    this.setState({redirect: true})
  }

  render(props) {
    if (this.state.redirect) {
      return <Redirect push to={`/`}/>;
    }

    const { handleSubmit, classes } = this.props

    const getClass = (classKey) => {return classnames(classes.all, classKey)}

    return (
      <div className={getClass(classes.form)}>
        <Link to={`/`} className={classes.title}>Return to Task List</Link>
        <Form onSubmit={handleSubmit(this.updateTask.bind(this))}>
          <Field className={getClass(classes.input)}
            name="title" component="input" type="text" label="Title"
          /><br/>
          <Field className={getClass(classes.input)}
            name="description" component="input" type="text" label="Description"
          /><br/>
          <Button
            variant="contained" color="primary" type="submit"
            className={getClass(classes.button)}>Update Task
          </Button>
          <Button
            variant="contained" color="primary" className={getClass(classes.button)}
            onClick={() => this.resetForm()}>Reset
          </Button>
          <Button
            variant="contained" color='primary' className={getClass(classes.button)}
            onClick={() => this.deleteTask()}>Delete
          </Button>
          <Button
            variant="contained" color='primary' className={getClass(classes.button)}
            onClick={() => this.completeTask()}>Complete
          </Button>
        </Form>
      </div>
    )
  }
}
const styles = {
  all: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    fontFamily: '"Roboto", sans-serif',
    margin: '1rem',
  },
  form: {
    width: 'fit-content'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    boxShadow: 'none'
  },
  input: {
    height: '2rem',
    border: '1px solid #9E9E9E',
    fontSize: '25px',
  },
  button: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 'bold'
  }
}
function mapStateToProps(state) {
  return {
    task: state.taskList.task,
    form: state.form,
  }
}
TaskDetail = connect(
    mapStateToProps,
)(TaskDetail)
export default reduxForm({
  form: 'taskDetail' // a unique identifier for this form
})(withStyles(styles)(TaskDetail))
