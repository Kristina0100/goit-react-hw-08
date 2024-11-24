import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {Toaster, toast } from 'react-hot-toast';

import styles from "./ContactForm.module.css"

export const ContactForm = () => {

  const INITIAL_VALUES = {
    name: '',
    number: ''
  }

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
    toast.success('Successfully added', {
        position: 'top-center',
        duration: 3000,
        style: {
          background: '#c2ffc1',
          color: '#363636',
        },
      });
  };

  return (
    <div>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddContactSchema}>
        <Form className={styles.form}>
          <label className={styles.name}>Name
            <Field className={styles.field} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </label>
      
          <label className={styles.number}>Number
            <Field className={styles.field} type="text" name="number" />
            <ErrorMessage className={styles.error} name="number" component="span" />
          </label>
          <button className={styles.btn} type='submit'>Add contact</button>
        </Form>
      </Formik>
       <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
        }}
      />
    </div>
  )
};