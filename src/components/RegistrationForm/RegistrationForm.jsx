import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddRegistrationSchema } from "../../utils/schemas";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

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
    <div className={styles.container}>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddRegistrationSchema}>
        <Form className={styles.form}>
          <label className={styles.label}>Name
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </label>
                    
          <label className={styles.label}>Email
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage className={styles.error} name="email" component="span" />
          </label>
      
          <label className={styles.label}>Password
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage className={styles.error} name="password" component="span" />
          </label>
          <button className={styles.button} type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};