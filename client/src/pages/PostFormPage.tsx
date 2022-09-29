import { useEffect, useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { PostContext } from '../context/post';

export function PostFormPage() {

  const { createPost } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        validationSchema={
          Yup.object({
            title: Yup.string().required('El titulo es requerido'),
            description: Yup.string().required('La descripcion es requerido'),
          })
        }
        onSubmit={ async (values, actions) => {
          await createPost(values);
          navigate('/');
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field 
              name="title" 
              placeholder="title"
              className="px-3 y-2 focus:outline-none rounded-sm bg-gray-600 text-white w-full"
            />
            <ErrorMessage 
              component="p" 
              className='text-red-400 text-sm' 
              name="title"
            />

            <Field 
              name="description" 
              placeholder="description"               
              className="px-3 y-2 focus:outline-none rounded-sm bg-gray-600 text-white w-full"
            />
            <ErrorMessage 
              component="p" 
              className='text-red-400 text-sm' 
              name="description" 
            />

            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
