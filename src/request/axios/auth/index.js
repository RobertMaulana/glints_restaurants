import postRequest from '../post'
import url from '../../endpoint/auth'

const sendOtp = async ({payload}) => {
    try {
        const base = url.generateOtp()
        return await postRequest(base, {phone: payload,partner: "pasarpolis"}) //needs to change to actual partner
    } catch (error) {
      return error.message
    }
}

const verifyOtp = async ({payload}) => {
    try {
        const base = url.verifyOtp()
        return await postRequest(base, payload)
    } catch (error) {
      return error.message
    }
}

export default {
    sendOtp,
    verifyOtp
}
