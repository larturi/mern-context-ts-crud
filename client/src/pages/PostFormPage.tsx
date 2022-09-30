import { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { PostContext } from '../context/post';

export function PostFormPage() {
   const { createPost, updatePost, getPost, post } = useContext(PostContext);
   const navigate = useNavigate();
   const params = useParams();

   useEffect(() => {
      if (params.id) {
         // Actualizar Post
         getPost(params.id);
      }
   }, []);

   return (
      <div>
         <Formik
            initialValues={{
               title: post?.title || '',
               description: post?.description || '',
            }}
            validationSchema={Yup.object({
               title: Yup.string().required('El titulo es requerido'),
               description: Yup.string().required(
                  'La descripcion es requerido'
               ),
            })}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
               
              if(params.id === 'new') {
                // Crear
                await createPost(values);
              } else {
                // Actualizar
                await updatePost(params.id!, values);
              }
               navigate('/');
            }}
         >
            {({ handleSubmit }) => (
               <div className='flex justify-center'>
                  <div className='bg-zinc-800 p-10 shadow-md shadow-black lg:w-2/6'>
                     <Form onSubmit={handleSubmit}>
                        <header className='flex justify-between items-center py-4 text-white'>
                           <h1 className='text-white text-3xl text-left mb-1'>
                              {params.id === 'new'
                                 ? 'Nuevo Post'
                                 : 'Editar Post'}
                           </h1>

                           <Link
                              to='/'
                              className='text-gray-400 text-sm hover:text-gray-200'
                           >
                              Volver
                           </Link>
                        </header>

                        <label
                           htmlFor='title'
                           className='text-sm block font-bold text-gray-400 mb-1'
                        >
                           Titulo
                        </label>
                        <Field
                           name='title'
                           placeholder='Titulo'
                           className='px-3 py-2 focus:outline-none rounded-sm bg-gray-600 text-white w-full'
                        />
                        <ErrorMessage
                           component='p'
                           className='text-indigo-400 text-sm mt-1'
                           name='title'
                        />

                        <label
                           htmlFor='description'
                           className='text-sm block font-bold text-gray-400 mt-3 mb-1'
                        >
                           Descripcion
                        </label>
                        <Field
                           name='description'
                           placeholder='Descripción'
                           component='textarea'
                           rows={4}
                           className='px-3 y-2 focus:outline-none rounded-sm bg-gray-600 text-white w-full'
                        />
                        <ErrorMessage
                           component='p'
                           className='text-indigo-400 text-sm'
                           name='description'
                        />

                        <button
                           type='submit'
                           className='bg-indigo-600 px-3 py-2 rounded-sm text-white mt-2 w-full'
                        >
                           Guardar
                        </button>
                     </Form>
                  </div>
               </div>
            )}
         </Formik>
      </div>
   );
}
