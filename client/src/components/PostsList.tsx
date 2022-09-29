import React, { FC } from 'react'
import { IPost } from '../interfaces/post'

interface Props {
    posts: IPost[]
  }

export const PostsList: FC<Props> = ({ posts }) => {
    return (
        <div>
            {
                posts.map((post) => (
                    <p key={post.title}>{post.title}</p>
                ))
            }
        </div>
    )
}
