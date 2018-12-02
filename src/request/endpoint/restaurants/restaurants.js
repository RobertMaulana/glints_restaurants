const host = process.env.REACT_APP_URL

const restaurants = () => {
    return `${host}api/restaurants`
}

const searchRestaurantsUrl = payload => {
    return `${host}api/restaurants/find?q=${payload}`
}

export default {
    restaurants,
    searchRestaurantsUrl
}
