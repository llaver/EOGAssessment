import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoList from './components/TodoList'
import registerServiceWorker from './registerServiceWorker'
import reducer from './redux/reducer'

let initialState = {
  tasks: []
}

let store = createStore(reducer,initialState)
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  root
)
registerServiceWorker();
