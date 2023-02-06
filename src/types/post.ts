export interface IPost {
  _id: string
  username: string
  title: string
  text: string
  imgUrl: string
  views: number
  author: string
  comments: string[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IComment {
  postId: string
  comment: string
}
