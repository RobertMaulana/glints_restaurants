import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { getToken, clearToken } from '../../helpers/utility'
import actions from './actions'
// import request from '../../request/axios/auth'
import Cookies from 'universal-cookie'
// import middleware from '../../middleware/responseChecker'

const cookies = new Cookies()

export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    // const token = getToken().get('token')
    // if (token) {
    //   yield put({
    //     type: actions.VERIFY_OTP_SUCCESS,
    //     token,
    //   })
    // }
  })
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken()
    yield put(push('/'))
  })
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(logout)
  ])
}
