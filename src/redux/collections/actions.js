const actions = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_STATUS: 'GET_COLLECTIONS_STATUS',
  SEND_INVITATION_COLLECTIONS: 'SEND_INVITATION_COLLECTIONS',
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
  })
}

export default actions
