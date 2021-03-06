import axios from 'axios'
import {getHeader} from '../../helpers/utility'

const postRequest = async (url, payload) => {
    return await axios.post(url, payload, {headers: getHeader()})
}

export default postRequest
