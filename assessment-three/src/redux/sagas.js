import { takeLatest, put, call, all } from 'redux-saga/effects'

import actions from './actions'

import { fetchAllTasks } from '../Api'

const url = 'https://practiceapi.devmountain.com/api/tasks/'

function* onAddTask() {
  yield takeLatest('ADD_TASK', function* addTasks(action) {
    try {
        var response = yield call(fetchAllTasks, url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: action.title
          })
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}

function* onUpdateTask() {
  yield takeLatest('UPDATE_TASK', function* updateTask(action) {
    try {
        var response = yield call(fetchAllTasks, url + action.id, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: action.task.title,
            description: action.task.description,
            completed: action.task.complete
          })
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}

function* onDeleteTask() {
  yield takeLatest('DELETE_TASK', function* deleteTasks(action) {
    try {
        var response = yield call(fetchAllTasks, url + action.id, {
          method: 'DELETE',
          body: JSON.stringify(action.id)
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}

function* onCompleteTask() {
  yield takeLatest('COMPLETE_TASK', function* completeTasks(action) {
    try {
        var response = yield call(fetchAllTasks, url + action.id, {
          method: 'PUT',
          body: JSON.stringify(action.id)
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}
function* onFetchTask() {
  yield takeLatest('FETCH_TASK', function* fetchTask(action) {
    try {
        var response = yield call(fetchAllTasks, url, {
          method: 'GET',
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTask(response, action.id))
  })
}
function* onFetchTasks() {
  yield takeLatest('FETCH_TASKS', function* fetchTasks(action) {
    try {
        var response = yield call(fetchAllTasks, url, {
          method: 'GET',
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}


export default function* rootSaga() {
  yield all([
    onAddTask(),
    onUpdateTask(),
    onDeleteTask(),
    onCompleteTask(),
    onFetchTask(),
    onFetchTasks()
  ])
}
