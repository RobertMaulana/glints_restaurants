const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  SIGNOUT: 'SIGNOUT',
  SIGNIN: 'SIGNIN',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
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
  })
}

export default actions
