import getRequest from '../get'
import postRequest from '../authPost'
import url from '../../endpoint/collections'

const getCollectionsByUserId = async ({payload}) => {
    try {
        const base = url.getCollectionsByUserIdUrl(payload)
        return await getRequest(base)
    } catch (error) {
        return error
    }
}

const sendInvitationCollaboration = async ({payload}) => {
    try {
        const base = url.inviteCollaborationCollections()
        return await postRequest(base, payload)
    } catch (error) {
        return error
    }
}

const editCollection = async ({payload}) => {
    try {
        const base = url.editCollectionUrl()
        return await postRequest(base, payload)
    } catch (error) {
        return error
    }
}

export default {
    getCollectionsByUserId,
    sendInvitationCollaboration,
    editCollection
}
