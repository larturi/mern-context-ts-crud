import React, { FC, useContext } from 'react';
import toast from 'react-hot-toast';
import { PostContext } from '../context/post';
import { IPost } from '../interfaces/post';

interface Props {
    post: IPost
}

export const PostsCard: FC<Props> = ({ post }) => {

    const { deletePost } = useContext(PostContext);

    const handleDelete = (id: string) => {
        toast((t) => (
            <div className='py-4 px-5'>
                <p className='mb-5 text-white'>Confirmas eliminar el post?</p>
                <div>
                    <button
                        className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
                        onClick={() => {
                            deletePost(id);
                            toast.dismiss(t.id);
                        }}
                    >
                        Eliminar
                    </button>
                    <button 
                        className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        ),
        {
          duration: 4000,
          style: {
            background: "#202020"
          }
        });
    }

    return (
        <div 
            className='bg-zinc-800 text-white rounded-sm shadow-md
                 shadow-black hover:bg-zinc-700 hover:cursor-pointer'
        >
            <div className='px-4 py-7'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-2xl'>{post.title}</h3>
                    <button 
                        className='bg-red-600 text-sm px-2 py-1 rounded-sm'
                        onClick={() => handleDelete(post._id!)}
                    >
                            Eliminar
                        </button>
                </div>

                <p className='mt-5 text-gray-300'>{post.description}</p>
            </div>
        </div>
    )
}
