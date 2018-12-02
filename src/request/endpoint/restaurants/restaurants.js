const host = process.env.REACT_APP_URL

const restaurants = () => {
    return `${host}api/restaurants`
}

const searchRestaurantsUrl = payload => {
    return `${host}api/restaurants/find?q=${payload}`
}

const saveCollectionsUrl = () => {
    return `${host}api/restaurants/collections`
}

export default {
    restaurants,
    searchRestaurantsUrl,
    saveCollectionsUrl
}
