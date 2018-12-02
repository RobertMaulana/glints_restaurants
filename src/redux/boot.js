import { store } from './store'
import authActions from './auth/actions'

export default () => {
    return new Promise(() => {
        return store.dispatch(authActions.checkAuthorization())
    })
}
