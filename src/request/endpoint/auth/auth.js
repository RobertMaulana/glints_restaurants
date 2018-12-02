const host = process.env.REACT_APP_URL

const signIn = () => {
    return `${host}api/auth/signin`
}

const getUserDetailsUrl = () => {
    return `${host}api/auth/details`
}

export default {
    signIn,
    getUserDetailsUrl
}
