import Cookies from 'universal-cookie'
import actions from './actions'

const cookies = new Cookies()

const initState = {
  idToken: null
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
