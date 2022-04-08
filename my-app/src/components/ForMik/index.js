import React ,{useEffect,useState} from "react";
import {Form,Formik,Field} from 'formik';
import * as Yup from 'yup';
const MyFormSchema = Yup.object().shape({
    email:Yup.string()
    .email('Invalid Email address')
    .required('Required email')
},
{
    password:Yup.string()
    .required('Required password')
}
);
function ForMik(){
    return(
        <div>
            <h1>Any where in your app</h1>
            <Formik
                initialValues={{email:'',password:'',}}
                // validate={
                //     values=>{
                //         const errors={};
                //         if(!values.email){
                //             errors.email = 'Required';
                //         }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                //             errors.email = 'Invalid email address';
                //         }
                //         return errors;
                //     }
                // }
                validationSchema={MyFormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >

                {({
                    errors,
                    touched,
                }) => (
                    <Form>
                    <label htmlFor="email">
                        Email
                    </label>
                    <Field id="email" name="email" type="email" placeholder="Enter email" />
                    {errors.email && touched.email && errors.email}
                    <label htmlFor="password">
                        Password
                    </label>
                    <Field id="password" name="password" type="password" placeholder="Enter password" />
                    {errors.password && touched.password && errors.password}
                    <Field as="select" name="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </Field>
                </Form>
                )}
                
            </Formik>
        </div>
    );
}
export default ForMik;