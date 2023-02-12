import { IPost } from './post'

export interface IUser {
  username: string
  password: string
  posts: IPost[]
}
