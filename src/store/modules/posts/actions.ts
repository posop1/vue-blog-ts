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

export const createPost = async (
  { commit }: ActionsParams,
  params: { title: string; text: string }
) => {
  try {
    const { data } = await api.post('/posts', params)

    commit('createPost', { post: data, status: 'completed' })
  } catch (error) {
    console.log(error)
    commit('createPost', { post: {}, status: 'error' })
  }
}

export const removePost = async ({ commit }: ActionsParams, id: string) => {
  try {
    const { data } = await api.delete(`/posts/${id}`)

    commit('removePost', { post: data })
  } catch (error) {}
}
