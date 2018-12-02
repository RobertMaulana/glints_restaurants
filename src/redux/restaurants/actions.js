const actions = {
  GET_RESTAURANTS: 'GET_RESTAURANTS',
  GET_RESTAURANTS_STATUS: 'GET_RESTAURANTS_STATUS',
  SEARCH_RESTAURANTS: 'SEARCH_RESTAURANTS',
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
  })
}

export default actions
