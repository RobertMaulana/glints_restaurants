import postRequest from '../post'
import url from '../../endpoint/auth'

const signInUrl = async ({payload}) => {
    try {
        const base = url.signIn()
        return await postRequest(base, payload)
    } catch (error) {
        return error
    }
}

export default {
    signInUrl
}
