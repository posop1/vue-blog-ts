import { Store, createStore } from 'vuex'
import posts from './modules/posts'
import auth from './modules/auth'
import { InjectionKey } from 'vue'
import { IPost } from '@/types/post'

export interface State {
  posts: IPost[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  modules: {
    posts,
    auth
  }
})
