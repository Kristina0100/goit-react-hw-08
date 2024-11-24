import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddLoginSchema } from "../../utils/schemas";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

export const LoginForm = () => {

  const INITIAL_VALUES = {
    email: '',
    password: ''
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddLoginSchema}>
        <Form className={styles.form}>
          <label className={styles.label}>Email
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage className={styles.error} name="email" component="span" />
          </label>
      
          <label className={styles.label}>Password
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage className={styles.error} name="password" component="span" />
          </label>
          <button className={styles.button} type='submit'>Log In</button>
        </Form>
      </Formik>
    </div>
  )
};