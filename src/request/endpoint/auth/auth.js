const host = process.env.REACT_APP_URL

const signIn = () => {
    return `${host}api/auth/signin`
}

export default {
    signIn
}
