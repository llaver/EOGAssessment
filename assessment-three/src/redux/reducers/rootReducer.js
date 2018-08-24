import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  taskList: taskReducer,
  form: formReducer
})
export default rootReducer
