import { IPost } from '@/types/post'
import { PostsState } from './types'

export const setPosts = (
  state: PostsState,
  payload: { posts: IPost[]; status: 'loading' | 'error' | 'complete' }
) => {
  if (typeof payload === 'string') {
  }
  state.posts = payload.posts
  state.status = payload.status
}
