import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import Button from '@material-ui/core/Button'

class TaskDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    this.updateTask = this.updateTask.bind(this)
  }

  updateTask(e) {
    var taskTitle = this.titleRef.value
    var taskDesc = this.descRef.value
		if(taskTitle !== "") {
      this.props.actions.updateTask(this.props.id, Object.assign({}, this.props.task, {
        title: taskTitle,
        description: taskDesc
      }))
			this.titleRef.value = ""
      this.descRef.value = ""
		}
    this.setState({redirect: true})
    e.preventDefault()
	}

  resetForm() {
    this.titleRef.value = this.props.task.title
    this.descRef.value = this.props.task.description
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
    var formStyle = {
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      width: 'fit-content'
    }
    var titleStyle = {
  		fontFamily: '"Roboto", sans-serif',
  		fontSize: '30px',
  		margin: '1rem',
  		fontWeight: 'bold'
  	}
    var inputStyle = {
  		height: '2rem',
  		border: '1px solid #9E9E9E',
  		margin: '1rem',
  		fontFamily: '"Roboto", sans-serif',
  		fontSize: '25px',
  		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  	}
    var buttonStyle = {
  		margin: '1rem',
  		fontFamily: '"Roboto", sans-serif',
  		fontWeight: 'bold'
  	}
    if (this.state.redirect) {
      return <Redirect push to={`/`}/>;
    }

    const task = this.props.task
    return (
      <div className="form" style={formStyle}>
        <Link to={`/`} style={titleStyle}>Return to Task List</Link>
        <form onSubmit={this.updateTask}>
          <input ref={(text) => this.titleRef = text} style={inputStyle} defaultValue={task === undefined ? '' : task.title} className="task-title"/><br/>
          <input ref={(text) => this.descRef = text} style={inputStyle} defaultValue={task === undefined ? '' : task.description} className="task-desc"/><br/>
          <Button variant="contained" color="primary" type="submit" style={buttonStyle}>Update Task</Button>
          <Button variant="contained" color="primary"  style={buttonStyle} onClick={() => this.resetForm()}>Reset</Button>
          <Button variant="contained" color='primary' style={buttonStyle} onClick={() => this.deleteTask()}>Delete</Button>
          <Button variant="contained" color='primary' style={buttonStyle} onClick={() => this.completeTask()}>Complete</Button>
        </form>
      </div>
    )
  }
}
function mapStateToProps(state) {return state.task}
export default connect(mapStateToProps) (TaskDetail)
