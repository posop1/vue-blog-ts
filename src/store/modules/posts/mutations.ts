import { IPost } from '@/types/post'
import { PostsState, TStatus } from './types'

export const setPosts = (state: PostsState, payload: { posts: IPost[]; status: TStatus }) => {
  state.posts = payload.posts
  state.status = payload.status
}

export const createPost = (state: PostsState, payload: { post: IPost; status: TStatus }) => {
  state.posts.push(payload.post)
  state.status = payload.status
}
