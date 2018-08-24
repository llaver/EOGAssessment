const initialState = {
  tasks: [],
  task: {
    id: '',
    title: '',
    description: '',
    complete: false
  }
}

let taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
    return state
    case 'UPDATE_TASK':
      return state
    case 'DELETE_TASK':
      //Delete the task locally first so that it dissapears without delay
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.id
        })
      })
    case 'COMPLETE_TASK':
      return state
    case 'FETCH_TASK':
      return Object.assign({}, state, {
        task: action.task
      })
    case 'FETCH_TASKS':
      return state
    case 'SET_TASKS':
      return Object.assign({}, state, {
        tasks: action.tasks,
        task: action.tasks.find((task) => {
          return parseInt(task.id, 10) === parseInt(action.id, 10)
        })
      })
    case 'FETCH_FAILED':
      console.log(action.e)
      return state
    default:
      return state
    }
}
export default taskReducer
