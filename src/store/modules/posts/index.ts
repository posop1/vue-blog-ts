import { PostsState } from './types'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state: PostsState = {
  posts: [],
  status: 'loading'
}

export default {
  state,
  actions,
  getters,
  mutations
}
