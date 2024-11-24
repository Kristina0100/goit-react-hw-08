import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddRegistrationSchema } from "../../utils/schemas";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
// import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {

    const INITIAL_VALUES = {
        name: '',
        email: '',
        password: '',
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            register({
                name: values.name,
                email: values.email,
                password: values.password,
            })
        )
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddRegistrationSchema}>
        <Form >
          <label>Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
                    
          <label>Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
      
          <label >Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};