import { IPost } from '@/types/post'
import { Commit } from 'vuex'

export type TStatus = 'loading' | 'error' | 'complete'
export interface PostsState {
  posts: IPost[]
  status: TStatus
}

export interface ActionsParams {
  commit: Commit
}
