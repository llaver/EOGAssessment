let actions = {
  fetchTasks: function() {
    return {
      type: 'FETCH_TASKS',
    }
  },
  addTask: function(title) {
    return {
      type: 'ADD_TASK',
      title: title,
    }
  },
  completeTask: function(id) {
    return {
      type: 'COMPLETE_TASK',
      id: id
    }
  },
  deleteTask: function(id) {
    return {
      type: 'DELETE_TASK',
      id: id
     }
  },
  setTasks: function(tasks) {
    console.log(tasks)
    return {
      type: 'SET_TASKS',
      tasks: tasks
    }
  },
  fetchFailed: function(e) {
    return {
      type: 'FETCH_FAILED',
      e: e
    }
  }
}
export default actions
