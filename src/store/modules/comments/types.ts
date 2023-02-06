import { IComment } from '@/types/post'
import { Commit } from 'vuex'

export interface CommentsState {
  comments: IComment[]
  isLoading: boolean
}

export interface ActionsParams {
  commit: Commit
}
