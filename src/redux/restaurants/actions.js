const actions = {
  GET_RESTAURANTS: 'GET_RESTAURANTS',
  GET_RESTAURANTS_STATUS: 'GET_RESTAURANTS_STATUS',
  SEARCH_RESTAURANTS: 'SEARCH_RESTAURANTS',
  SAVE_COLLECTIONS: 'SAVE_COLLECTIONS',
  SAVE_COLLECTIONS_STATUS: 'SAVE_COLLECTIONS_STATUS',
  RESET_REDUX: 'RESET_REDUX',
  getRestaurants: () => ({
    type: actions.GET_RESTAURANTS
  }),
  getRestaurantStatus: payload => ({
    type: actions.GET_RESTAURANTS_STATUS,
    payload
  }),
  searchRestaurants: payload => ({
    type: actions.SEARCH_RESTAURANTS,
    payload
  }),
  saveCollections: payload => ({
    type: actions.SAVE_COLLECTIONS,
    payload
  }),
  saveCollectionsStatus: payload => ({
    type: actions.SAVE_COLLECTIONS_STATUS,
    payload
  }),
  resetRedux: () => ({
    type: actions.RESET_REDUX
  })
}

export default actions
