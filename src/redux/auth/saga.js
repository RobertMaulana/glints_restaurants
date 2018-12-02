import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { getToken, clearToken } from '../../helpers/utility'
import request from '../../request/axios/auth'
import actions from './actions'
// import request from '../../request/axios/auth'
import Cookies from 'universal-cookie'
// import middleware from '../../middleware/responseChecker'

const cookies = new Cookies()

export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().get('token')
    if (token !== undefined) {
      yield put({
        type: actions.SIGNIN_SUCCESS,
        token,
      })
    }
  })
}

export function* signin() {
  yield takeEvery(actions.SIGNIN, function*(payload) {
    let res = yield call(request.signInUrl, payload)
    if (res.status === 200) {
      const {token} = res.data
      cookies.set('token', token, { path: '/' })
      yield put({
        type: actions.SIGNIN_SUCCESS,
        token,
      })
    } else {
      yield put({
        type: actions.SIGNIN_FAILED,
        signinMessage: 'Wrong credentials'
      })
    }
  })
}

export function* signout() {
  yield takeEvery(actions.SIGNOUT, function*() {
    clearToken()
    yield put(push('/'))
  })
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(signin),
    fork(signout)
  ])
}
