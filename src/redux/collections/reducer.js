import actions from './actions'

const initState = {
  getCollectionsMessage: '',
  collections: []
}

export default function restaurantReducer(state = initState, action) {
  switch (action.type) {
    case actions.RESET_REDUX:
      return {
        ...state,
        getCollectionsMessage: ''
      }
    case actions.GET_COLLECTIONS_STATUS:
      return {
        ...state,
        collections: action.data,
        getCollectionsMessage: action.getCollectionsMessage
      }
    default:
      return state
  }
}
