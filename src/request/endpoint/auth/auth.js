const host = process.env.REACT_APP_URL

const generateOtp = () => {
    return `${host}api/v1/user/send_otp/`
}

const verifyOtp = () => {
    return `${host}api/v1/user/verify_otp/`
}

export default {
    generateOtp,
    verifyOtp
}
