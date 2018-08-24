import React, { Component } from "react"
import { Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import TaskDetailContainer from './components/TaskDetailContainer'

class App extends Component {
	render() {
		return (
			<div className="app">
        <Route exact path="/" component={TodoList} />
        <Route path="/tasks/:id" component={TaskDetailContainer} />
      </div>
		)
	}
}
export default App
