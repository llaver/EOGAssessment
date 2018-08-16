import { takeLatest, put, call, all } from 'redux-saga/effects'

import actions from './actions'

import { fetchAllTasks } from '../Api'

function* onFetchTasks() {
  yield takeLatest('FETCH_TASKS', function* fetchTasks() {
    try {
        var response = yield call(fetchAllTasks, 'https://practiceapi.devmountain.com/api/tasks', {
          method: 'GET'
        })
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}

function* onAddTask() {
  yield takeLatest('ADD_TASK', function* addTasks(action) {
    try {
        var response = yield call(fetchAllTasks, 'https://practiceapi.devmountain.com/api/tasks', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: action.title
          })
        })
        console.log(JSON.stringify({
          title: action.title
        }).length)
    } catch (e) {
        yield put(actions.fetchFailed(e))
        return
    }
    yield put(actions.setTasks(response))
  })
}

function* onUpdateTask() {
  yield takeLatest('UPDATE_TASK', function* updateTasks(action) {
    try {
        var response = yield call(fetchAllTasks, 'https://practiceapi.devmountain.com/api/tasks/' + action.id, {
          method: 'PATCH',
          body: JSON.stringify(action.id)
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
        var response = yield call(fetchAllTasks, 'https://practiceapi.devmountain.com/api/tasks/' + action.id, {
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
        var response = yield call(fetchAllTasks, 'https://practiceapi.devmountain.com/api/tasks/' + action.id, {
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

export default function* rootSaga() {
  yield all([
    onFetchTasks(),
    onAddTask(),
    onUpdateTask(),
    onDeleteTask(),
    onCompleteTask()
  ])
}
