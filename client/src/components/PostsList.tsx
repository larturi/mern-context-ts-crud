import React, { FC } from 'react'
import { IPost } from '../interfaces/post'
import { PostsCard } from './PostCard'
interface Props {
    posts: IPost[]
  }

export const PostsList: FC<Props> = ({ posts }) => {
    return (
        <div className='mt-4 grid grid-cols-3 gap-2'>
            {
                posts.map((post) => (
                    <PostsCard 
                        post={post}
                        key={post._id}
                    />
                ))
            }
        </div>
    )
}
