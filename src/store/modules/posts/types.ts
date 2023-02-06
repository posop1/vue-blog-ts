import { IPost } from '@/types/post'
import { Commit } from 'vuex'

export interface PostsState {
  posts: IPost[]
  status: 'loading' | 'error' | 'complete'
}

export interface ActionsParams {
  commit: Commit
}
