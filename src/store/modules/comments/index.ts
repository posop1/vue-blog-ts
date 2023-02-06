import { CommentsState } from './types'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state: CommentsState = {
  comments: [],
  isLoading: true
}

export default {
  state,
  actions,
  getters,
  mutations
}
