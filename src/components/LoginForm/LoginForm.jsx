import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddLoginSchema } from "../../utils/schemas";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
// import styles from './LoginForm.module.css';

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
    //       .unwrap()
    //       .then(() => {
    //         console.log('login success');
    //       })
    //       .catch(() => {
    //         console.log('login error');
    //       });
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddLoginSchema}>
        <Form>
          <label>Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
      
          <label >Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type='submit'>Log In</button>
        </Form>
      </Formik>
    </div>
  )
};