import postRequest from '../post'
import authPostRequest from '../authPost'
import url from '../../endpoint/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const signInUrl = async ({payload}) => {
    try {
        const base = url.signIn()
        return await postRequest(base, payload)
    } catch (error) {
        return error
    }
}

const getUserDetails = async () => {
    try {
        const token = cookies.get('token')
        const base = url.getUserDetailsUrl()
        return await authPostRequest(base, {token})
    } catch (error) {
        return error
    }
}

export default {
    signInUrl,
    getUserDetails
}
