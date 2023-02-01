import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3002/api/',
  headers: {
    accept: 'application/json'
  }
})

export default api
