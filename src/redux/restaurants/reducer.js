import actions from './actions'

const initState = {
  getRestaurantMessage: '',
  saveCollectionsMessage: ''
}

export default function restaurantReducer(state = initState, action) {
  switch (action.type) {
    case actions.RESET_REDUX:
      return {
        ...state,
        getRestaurantMessage: '',
        saveCollectionsMessage: ''
      }
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
    case actions.SAVE_COLLECTIONS_STATUS:
      return {
        ...state,
        collections: action.data,
        saveCollectionsMessage: action.saveCollectionsMessage
      }
    default:
      return state
  }
}
