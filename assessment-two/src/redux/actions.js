let actions = {
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
  }
}
export default actions
