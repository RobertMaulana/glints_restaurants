import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import request from '../../request/axios/collections'
import actions from './actions'

export function* getCollectionsByUserIdRequest() {
  yield takeEvery(actions.GET_COLLECTIONS, function*(payload) {
    let res = yield call(request.getCollectionsByUserId, payload)
    if (res.status === 200) {
      yield put({
        type: actions.GET_COLLECTIONS_STATUS,
        getCollectionsMessage: 'success',
        data: res.data,
      })
    } else {
      yield put({
        type: actions.GET_COLLECTIONS_STATUS,
        getCollectionsMessage: 'failed',
        data: []
      })
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getCollectionsByUserIdRequest)
  ])
}
