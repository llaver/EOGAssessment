let actions = {
  addTask: function(title) {
    return {
      type: 'ADD_TASK',
      method: 'POST',
      url: '',
      body: JSON.stringify({title: title}),
    }
  },
  updateTask: function(id, task) {
    return {
      type: 'UPDATE_TASK',
      method: 'PATCH',
      url: id,
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        completed: task.complete
      })
    }
  },
  completeTask: function(id) {
    return {
      type: 'COMPLETE_TASK',
      method: 'PUT',
      url: id,
      body: JSON.stringify({id: id})
    }
  },
  deleteTask: function(id) {
    return {
      type: 'DELETE_TASK',
      method: 'DELETE',
      url: id,
      body: JSON.stringify({id: id})
     }
  },
  fetchTasks: function(id='') {
    return {
      type: 'FETCH_TASKS',
      method: 'GET',
      id: id,
      url: '',
    }
  },
  setTasks: function(tasks, id='') {
    return {
      type: 'SET_TASKS',
      tasks: tasks,
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
