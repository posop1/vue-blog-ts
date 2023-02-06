import api from '@/api/instance'
import { ActionsParams } from './types'

export const fetchPosts = async ({ commit }: ActionsParams) => {
  try {
    const { data } = await api.get('/posts')

    commit('setPosts', { posts: data.posts, status: 'completed' })
  } catch (error) {
    console.log(error)
    commit('setPosts', { posts: {}, status: 'error' })
  }
}
