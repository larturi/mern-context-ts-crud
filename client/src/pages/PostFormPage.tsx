import { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
               image: post?.image || null,
            }}
            validationSchema={Yup.object({
               title: Yup.string().required('El titulo es requerido'),
               description: Yup.string().required(
                  'La descripcion es requerido'
               ),
            })}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
               if (!params.id) {
                  // Crear
                  await createPost(values);
               } else {
                  // Actualizar
                  await updatePost(params.id!, values);
               }

               actions.setSubmitting(false);

               navigate('/');
            }}
         >
            {({ handleSubmit, setFieldValue, isSubmitting }) => (
               <div className='flex justify-center'>
                  <div className='bg-zinc-800 p-10 shadow-md shadow-black w-full md:w-5/6 lg:w-3/6 xl:w-3/6'>
                     <Form onSubmit={handleSubmit}>
                        <header className='flex justify-between items-center py-4 text-white'>
                           <h1 className='text-white text-3xl text-left mb-1'>
                              {!params.id
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
                           className='px-3 py-2 focus:outline-none rounded-sm bg-gray-600 text-white w-full'
                        />
                        <ErrorMessage
                           component='p'
                           className='text-indigo-400 text-sm'
                           name='description'
                        />
                        <label
                           htmlFor='title'
                           className='text-sm block font-bold text-gray-400 mb-1 mt-1'
                        >
                           Imagen
                        </label>
                        <input
                           type='file'
                           name='image'
                           onChange={(e) => setFieldValue('image', e.target.files![0])}
                           className='px-3 py-3 focus:outline-none rounded bg-gray-600 text-white w-full'
                        ></input>

                        <button
                           type='submit'
                           disabled={isSubmitting}
                           className='bg-indigo-600 px-3 py-2 rounded-sm text-white mt-4 w-full text-center flex justify-center'
                        >
                           { isSubmitting ? (
                              <AiOutlineLoading3Quarters className='animate-spin h-5 w-5' />
                           ) : 'Guardar' }
                        </button>
                     </Form>
                  </div>
               </div>
            )}
         </Formik>
      </div>
   );
}
