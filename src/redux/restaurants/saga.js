import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import request from '../../request/axios/restaurants'
import actions from './actions'

export function* getRestaurantRequest() {
  yield takeEvery(actions.GET_RESTAURANTS, function*() {
    let res = yield call(request.getRestaurants)
    if (res.status === 200) {
      yield put({
        type: actions.GET_RESTAURANTS_STATUS,
        getRestaurantMessage: 'success',
        data: res.data,
      })
    } else {
      yield put({
        type: actions.GET_RESTAURANTS_STATUS,
        getRestaurantMessage: 'Wrong credentials',
        data: []
      })
    }
  })
}

export function* searchRestaurantsRequest() {
  yield takeEvery(actions.SEARCH_RESTAURANTS, function*(payload) {
    let res = yield call(request.searchRestaurants, payload)
    if (res.status === 200) {
      yield put({
        type: actions.GET_RESTAURANTS_STATUS,
        getRestaurantMessage: 'success',
        data: res.data,
      })
    } else {
      yield put({
        type: actions.GET_RESTAURANTS_STATUS,
        getRestaurantMessage: 'Wrong credentials',
        data: []
      })
    }
  })
}

export function* saveCollectionsRequest() {
  yield takeEvery(actions.SAVE_COLLECTIONS, function*(payload) {
    let res = yield call(request.saveCollections, payload)
    if (res.status === 201) {
      yield put({
        type: actions.SAVE_COLLECTIONS_STATUS,
        saveCollectionsMessage: 'success',
        data: res.data,
      })
      yield put({
        type: actions.GET_RESTAURANTS
      })
    } else {
      yield put({
        type: actions.SAVE_COLLECTIONS_STATUS,
        saveCollectionsMessage: 'failed',
        data: []
      })
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getRestaurantRequest),
    fork(searchRestaurantsRequest),
    fork(saveCollectionsRequest)
  ])
}
