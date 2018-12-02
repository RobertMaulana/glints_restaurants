const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  SIGNOUT: 'SIGNOUT',
  SIGNIN: 'SIGNIN',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
  GET_USER_DETAILS: 'GET_USER_DETAILS',
  USER_DETAILS: 'USER_DETAILS',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  signOut: () => ({
    type: actions.SIGNOUT
  }),
  signIn: payload => ({
    type: actions.SIGNIN,
    payload
  }),
  signinSuccess: payload => ({
    type: actions.SIGNIN_SUCCESS,
    payload
  }),
  signinFailed: payload => ({
    type: actions.SIGNIN_FAILED,
    payload
  }),
  getUserDetails: () => ({
    type: actions.GET_USER_DETAILS
  }),
  userDetails: payload => ({
    type: actions.USER_DETAILS,
    payload
  })
}

export default actions
