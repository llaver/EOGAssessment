import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import TaskDetail from './TaskDetail'

class TaskDetailContainer extends Component {
  constructor(props) {
    super(props)

    this.props.actions.fetchTasks(this.props.match.params.id)
  }

  render(props) {
    return (
      <TaskDetail id={this.props.match.params.id}
                  actions={this.props.actions}
                  task={this.props.taskList.task}/>
    )
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps) (TaskDetailContainer)
