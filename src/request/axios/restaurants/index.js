import getRequest from '../get'
import authPostRequest from '../authPost'
import url from '../../endpoint/restaurants'

const getRestaurants = async () => {
    try {
        const base = url.restaurants()
        return await getRequest(base)
    } catch (error) {
        return error
    }
}

const searchRestaurants = async ({payload}) => {
    try {
        const base = url.searchRestaurantsUrl(payload)
        return await getRequest(base)
    } catch (error) {
        return error
    }
}

const saveCollections = async ({payload}) => {
    try {
        const base = url.saveCollectionsUrl()
        return await authPostRequest(base, payload)
    } catch (error) {
        return error
    }
}

export default {
    getRestaurants,
    searchRestaurants,
    saveCollections
}
