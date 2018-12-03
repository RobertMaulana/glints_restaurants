import actions from './actions'

const initState = {
  getCollectionsMessage: '',
  collections: [],
  getInviteMessage: ''
}

export default function restaurantReducer(state = initState, action) {
  switch (action.type) {
    case actions.RESET_REDUX:
      return {
        ...state,
        getCollectionsMessage: '',
        getInviteMessage: ''
      }
    case actions.GET_COLLECTIONS_STATUS:
      return {
        ...state,
        collections: action.data,
        getCollectionsMessage: action.getCollectionsMessage
      }
    case actions.SEND_INVITATION_COLLECTIONS_STATUS:
      return {
        ...state,
        getInviteMessage: action.getInviteMessage
      }
    default:
      return state
  }
}
