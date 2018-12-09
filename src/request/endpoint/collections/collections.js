const host = process.env.REACT_APP_API_ENDPOINT

const getCollectionsByUserIdUrl = payload => {
    return `${host}/api/collections/user/${payload}`
}

const inviteCollaborationCollections = () => {
    return `${host}/api/collections/invites`
}

const editCollectionUrl = () => {
    return `${host}/api/collections/edit`
}

export default {
    getCollectionsByUserIdUrl,
    inviteCollaborationCollections,
    editCollectionUrl
}
