import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import registerServiceWorker from './registerServiceWorker'

var root = document.getElementById('root')

ReactDOM.render(
  <TodoList />,
  root
)
registerServiceWorker();
