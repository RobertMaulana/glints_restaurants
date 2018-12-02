import actions from './actions'

const initState = {
  getRestaurantMessage: ''
}

export default function restaurantReducer(state = initState, action) {
  switch (action.type) {
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        idToken: action.token
      }
    case actions.GET_RESTAURANTS_STATUS:
      return {
        ...state,
        restaurants: action.data,
        getRestaurantMessage: action.getRestaurantMessage
      }
    default:
      return state
  }
}
