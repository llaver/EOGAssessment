function getTaskId(state) {
  return state.tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}
let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [{
          id: getTaskId(state),
          title: action.title,
          completed: false
        }, ...state.tasks]
      })
    case 'DELETE_TASK':
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.id
        })
      })
    case 'COMPLETE_TASK':
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          return task.id === action.id ?
          Object.assign({}, task, {completed: !task.completed}) : task
        })
      })
    default:
      return state;
    }
}
export default reducer
