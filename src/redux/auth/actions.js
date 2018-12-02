const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: () => ({
    type: actions.LOGIN_REQUEST
  }),
  signOut: () => ({
    type: actions.LOGOUT
  })
}

export default actions
