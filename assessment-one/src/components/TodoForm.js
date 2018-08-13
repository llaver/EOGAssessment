import React, { Component } from "react"
import Button from '@material-ui/core/Button'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.addTask = this.addTask.bind(this)
  }

  addTask(e) {
		if(this.inputRef.value !== "") {
			var task = {
				id: Date.now(),
				title: this.inputRef.value,
				completed: false
			}

      this.props.addTask(task)
			this.inputRef.value = ""
		}
    e.preventDefault()
	}

  render() {
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

    return (
      <div className="form" style={formStyle}>
        <form onSubmit={this.addTask}>
          <div className="title" style={titleStyle}>TO-DO:</div>
          <input ref={(text) => this.inputRef = text} style={inputStyle} placeholder="Enter Task" className="add-task"/><br/>
          <Button variant="contained" color="primary" type="submit" style={buttonStyle}>Add new To-do</Button>
        </form>
      </div>
    )
  }
}

export default TodoForm
