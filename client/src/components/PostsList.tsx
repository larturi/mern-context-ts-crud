import React, { FC } from 'react'
import { IPost } from '../interfaces/post'
import { PostsCard } from './PostCard'
interface Props {
    posts: IPost[]
  }

export const PostsList: FC<Props> = ({ posts }) => {
    return (
        <div className='lg:mt-4 lg:grid lg:grid-cols-4 lg:gap-2 mb-16'>
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
