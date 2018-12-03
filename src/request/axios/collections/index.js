import getRequest from '../get'
import url from '../../endpoint/collections'

const getCollectionsByUserId = async ({payload}) => {
    try {
        const base = url.getCollectionsByUserIdUrl(payload)
        return await getRequest(base)
    } catch (error) {
        return error
    }
}

export default {
    getCollectionsByUserId
}
