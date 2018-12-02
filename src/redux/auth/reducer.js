import actions from './actions'

const initState = {
  idToken: null,
  signinMessage: ''
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        idToken: action.token
      }
    case actions.SIGNIN_FAILED:
      return {
        ...state,
        signinMessage: action.signinMessage
      }
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
