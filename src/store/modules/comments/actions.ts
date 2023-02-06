import api from '@/api/instance'
import { ActionsParams } from './types'

export const fetchComments = async ({ commit }: ActionsParams, { postId }: { postId: string }) => {
  try {
    const { data } = await api.get(`/posts/${postId}/comments`)

    commit('setComments', data)
  } catch (error) {
    console.log(error)
  }
}

export const createComment = async (
  { commit }: ActionsParams,
  { postId, comment }: { postId: string; comment: string }
) => {
  try {
    const { data } = await api.post(`/comments/${postId}`, {
      postId,
      comment
    })

    commit('setNewComment', data)
  } catch (error) {
    console.log(error)
  }
}
