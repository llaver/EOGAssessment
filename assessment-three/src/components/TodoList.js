import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoTaskList from "./TodoTaskList"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class TodoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fetched: false
		}
	}
	componentDidMount() {
		this.props.actions.fetchTasks()
	}
	render() {
		return (
			<div className="todoList">
				<TodoForm addTask={this.props.actions.addTask} />
				<TodoTaskList tasks={this.props.tasks}
				 					 		actions={this.props.actions} />
			</div>
		)
	}
}

function mapStateToProps(state) {return state.taskList}
function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)}}
export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
