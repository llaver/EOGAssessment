import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import registerServiceWorker from './registerServiceWorker'
import rootSaga from './redux/sagas'
import App from './App'

let initialState = {
  tasks: [],
  task: {
    id: '',
    title: '',
    description: '',
    complete: false
  }
}

let store = configureStore(initialState)
store.runSaga(rootSaga)
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  root
)
registerServiceWorker();
