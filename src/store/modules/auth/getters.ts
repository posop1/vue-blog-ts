import { AuthState } from './types'

export const checkAuth = (state: AuthState) => Boolean(state.token)

export const getUser = (state: AuthState) => state.user
