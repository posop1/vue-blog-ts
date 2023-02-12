import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3002/api/',
  headers: {
    accept: 'application/json'
  }
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')

  return config
})

export default api
