import axios from 'axios'
import {preLoginHeader} from '../../helpers/utility'

const postRequest = async (url, payload) => await axios.post(url, payload, {headers: preLoginHeader()})

export default postRequest
