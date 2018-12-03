import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import restaurantSagas from './restaurants/saga'
import collectionSagas from './collections/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    restaurantSagas(),
    collectionSagas()
  ])
}
