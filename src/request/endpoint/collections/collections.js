const host = process.env.REACT_APP_URL

const getCollectionsByUserIdUrl = (payload) => {
    return `${host}api/collections/user/${payload}`
}

export default {
    getCollectionsByUserIdUrl
}
