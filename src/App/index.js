import React from "react"
import { Provider } from "react-redux"
import { store, history } from "../redux/store"
import PublicRoutes from "../router"
import Boot from "../redux/boot"

const Home = () => (
    <Provider store={store}>
        <PublicRoutes history={history} />
    </Provider>
)

Boot()
    .then(() => Home())
    .catch(error => console.error(error))

export default Home
