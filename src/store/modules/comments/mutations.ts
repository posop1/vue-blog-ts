import { IComment } from '@/types/post'
import { CommentsState } from './types'

export const setComments = (state: CommentsState, payload: IComment[]) => {
  state.comments = payload
  state.isLoading = false
}

export const setNewComment = (state: CommentsState, payload: IComment) => {
  state.comments.push(payload)
}
