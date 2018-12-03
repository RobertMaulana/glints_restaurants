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

export function* sendInvitationCollectionRequest() {
  yield takeEvery(actions.SEND_INVITATION_COLLECTIONS, function*(payload) {
    let res = yield call(request.sendInvitationCollaboration, payload)
    if (res.status === 200) {
      yield put({
        type: actions.SEND_INVITATION_COLLECTIONS_STATUS,
        getInviteMessage: 'success'
      })
    } else {
      yield put({
        type: actions.SEND_INVITATION_COLLECTIONS_STATUS,
        getInviteMessage: 'failed'
      })
    }
  })
}

export function* editCollectionRequest() {
  yield takeEvery(actions.EDIT_COLLECTIONS, function*(payload) {
    let user_id = payload.payload.user_id
    let res = yield call(request.editCollection, payload)
    if (res.status === 200) {
      yield put({
        type: actions.GET_COLLECTIONS,
        payload: user_id
      })
      yield put({
        type: actions.EDIT_COLLECTIONS_STATUS,
        editCollectionMessage: 'success'
      })
    } else {
      yield put({
        type: actions.EDIT_COLLECTIONS_STATUS,
        editCollectionMessage: 'failed'
      })
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getCollectionsByUserIdRequest),
    fork(sendInvitationCollectionRequest),
    fork(editCollectionRequest)
  ])
}
