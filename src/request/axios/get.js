import axios from 'axios'
import {getHeader} from '../../helpers/utility'

const getRequest = async url => await axios.get(url, {headers: getHeader()})

export default getRequest
