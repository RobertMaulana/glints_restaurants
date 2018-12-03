const host = process.env.REACT_APP_URL

const getCollectionsByUserIdUrl = payload => {
    return `${host}api/collections/user/${payload}`
}

const inviteCollaborationCollections = () => {
    return `${host}api/collections/invites`
}

export default {
    getCollectionsByUserIdUrl,
    inviteCollaborationCollections
}
