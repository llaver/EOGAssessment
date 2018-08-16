let actions = {
  addTask: function(title) {
    return {
      type: 'ADD_TASK',
      title: title,
    }
  },
  updateTask: function(id, task) {
    return {
      type: 'UPDATE_TASK',
      id: id,
      task: task
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
  fetchTask: function(id) {
    return {
      type: 'FETCH_TASK',
      id: id
    }
  },
  fetchTasks: function() {
    return {
      type: 'FETCH_TASKS',
    }
  },
  setTasks: function(tasks) {
    return {
      type: 'SET_TASKS',
      tasks: tasks
    }
  },
  setTask: function(task, id) {
    return {
      type: 'SET_TASK',
      tasks: task,
      id: id
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
