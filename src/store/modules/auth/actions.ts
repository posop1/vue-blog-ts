import api from '@/api/instance'
import { ActionsParams, AuthState, ILoginFetch, IRegisterFetch, fetchParams } from './types'

export const registerUser = async (
  { commit }: ActionsParams,
  { username, password }: fetchParams
) => {
  try {
    const { data } = await api.post<IRegisterFetch>('/auth/register', {
      username,
      password
    })

    commit('setUser', { user: data.newUser, token: data.token, status: data.message })
    if (data.token) {
      localStorage.setItem('token', data.token)
    }
  } catch (error) {
    console.log(error)
    commit('setPosts', { status: 'error' })
  }
}

export const loginUser = async ({ commit }: ActionsParams, { username, password }: fetchParams) => {
  try {
    const { data } = await api.post<ILoginFetch>('/auth/login', {
      username,
      password
    })

    commit('setUser', { user: data.user, token: data.token, status: data.message })
    if (data.token) {
      localStorage.setItem('token', data.token)
    }
  } catch (error) {
    console.log(error)
    commit('setPosts', { status: 'error' })
  }
}

export const getMe = async ({ commit }: ActionsParams) => {
  const { data } = await api.get('/auth/me')

  commit('setUser', { user: data.user, token: data.token, status: data.message })
}

export const logout = ({ commit }: ActionsParams) => {
  commit('logoutUser')
}
