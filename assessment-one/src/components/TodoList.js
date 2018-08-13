import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoTaskList from "./TodoTaskList"

class TodoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: []
		}

		this.addTask = this.addTask.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
		this.completeTask = this.completeTask.bind(this)
	}

	addTask(task) {
		this.setState((prevState) => {
			return {
				tasks: prevState.tasks.concat(task)
			}
		})
	}

	deleteTask(taskData) {
		this.setState({
			tasks: taskData
		})
	}

	completeTask(taskData) {
		this.setState({
      tasks: taskData
    })
	}

	render() {
		return (
			<div className="todoList">
				<TodoForm addTask={this.addTask} />
				<TodoTaskList tasks={this.state.tasks}
				 					 deleteTask={this.deleteTask}
								 	 completeTask={this.completeTask} />
			</div>
		)
	}
}

export default TodoList
