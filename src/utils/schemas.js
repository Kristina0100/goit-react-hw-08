import * as Yup from "yup";

export const AddContactSchema = Yup.object().shape(
    {
        name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
    number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Number is required"),
    });

    export const AddLoginSchema =  Yup.object().shape(
        {
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, "Too long!")
    .required('Password is required'),
    });


    export const AddRegistrationSchema =  Yup.object().shape(
    {
    name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, "Too long!")
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
    });