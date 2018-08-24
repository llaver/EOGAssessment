import { takeLatest, put, call, all } from 'redux-saga/effects'

import actions from './actions'

import { fetchAllTasks } from '../Api'

const url = 'https://practiceapi.devmountain.com/api/tasks/'

function* onAddTask() {
  yield takeLatest('ADD_TASK', handleTasks)
}

function* onUpdateTask() {
  yield takeLatest('UPDATE_TASK', handleTasks)
}

function* onCompleteTask() {
  yield takeLatest('COMPLETE_TASK', handleTasks)
}

function* onDeleteTask() {
  yield takeLatest('DELETE_TASK', handleTasks)
}

function* onFetchTask() {
  yield takeLatest('FETCH_TASK', handleTasks)
}
function* onFetchTasks() {
  yield takeLatest('FETCH_TASKS', handleTasks)
}

function* handleTasks(action) {
  try {
      var response = yield call(fetchAllTasks, url + action.url, {
        method: action.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: action.body
      })
  } catch (e) {
      yield put(actions.fetchFailed(e))
      return
  }
  yield put(actions.setTasks(response, action.id))
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
