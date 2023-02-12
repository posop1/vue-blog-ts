import { AuthState } from './types'

export const checkAuth = (state: AuthState) => Boolean(state.token)
