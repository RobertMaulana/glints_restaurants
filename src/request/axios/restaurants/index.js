import getRequest from '../get'
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

export default {
    getRestaurants,
    searchRestaurants
}
