import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import TodoList from './components/TodoList'
import registerServiceWorker from './registerServiceWorker'
import rootSaga from './redux/sagas'

let initialState = {
  tasks: []
}

let store = configureStore(initialState)
store.runSaga(rootSaga)
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  root
)
registerServiceWorker();
