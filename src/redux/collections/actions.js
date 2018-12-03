const actions = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_STATUS: 'GET_COLLECTIONS_STATUS',
  SEND_INVITATION_COLLECTIONS: 'SEND_INVITATION_COLLECTIONS',
  SEND_INVITATION_COLLECTIONS_STATUS: 'SEND_INVITATION_COLLECTIONS_STATUS',
  RESET_REDUX_COLLECTIONS: 'RESET_REDUX_COLLECTIONS',
  EDIT_COLLECTIONS: 'EDIT_COLLECTIONS',
  getCollectionsByUserId: payload => ({
    type: actions.GET_COLLECTIONS,
    payload
  }),
  collections: payload => ({
    type: actions.GET_COLLECTIONS_STATUS,
    payload
  }),
  inviteCollaborateCollections: payload => ({
    type: actions.SEND_INVITATION_COLLECTIONS,
    payload
  }),
  inviteStatus: payload => ({
    type: actions.SEND_INVITATION_COLLECTIONS_STATUS,
    payload
  }),
  resetReduxCollections: () => ({
    type: actions.RESET_REDUX_COLLECTIONS
  }),
  editCollections: payload => ({
    type: actions.EDIT_COLLECTIONS,
    payload
  })
}

export default actions
