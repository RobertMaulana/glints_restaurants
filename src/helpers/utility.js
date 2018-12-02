import { Map } from 'immutable';
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function preLoginHeader () {
  return {'Content-Type': 'application/json'}
}

export function getHeader(){
  let token = getToken().get('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ token
  }
}

export function clearToken() {
  localStorage.removeItem('token')
  const allCookies = cookies.getAll()
  const options = {
    path: '/'
  }
  for(let key in allCookies) {
    cookies.remove(key, options)
  }
}

export function getToken() {
  try {
    const token = cookies.get('token');
    return new Map({ token });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

