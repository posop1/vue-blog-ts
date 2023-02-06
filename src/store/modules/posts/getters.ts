import { PostsState } from './types'

export const getPosts = (state: PostsState) => state.posts

export const getStatus = (state: PostsState) => state.status
