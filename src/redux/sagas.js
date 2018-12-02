import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import restaurantSagas from './restaurants/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    restaurantSagas()
  ])
}
