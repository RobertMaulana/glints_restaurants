const actions = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_STATUS: 'GET_COLLECTIONS_STATUS',
  getCollectionsByUserId: payload => ({
    type: actions.GET_COLLECTIONS,
    payload
  }),
  collections: payload => ({
    type: actions.GET_COLLECTIONS_STATUS,
    payload
  })
}

export default actions
