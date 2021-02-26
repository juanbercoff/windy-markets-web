import React from 'react';
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";
import FormGroup from './FormGroup'





const Login = () => {
    let history = useHistory();

    const loginHandler = (data) => {
        //TODO input validation
        return fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: data.email, password: data.password})
    
        })
        .then(res => {
            if(res.status === 200) {
                //return res.headers.map['auth-token']
                //storeToken(res.headers.map['auth-token'])
                console.log('good login')
                history.push("/");
            } else {
                console.log('bad login')
            }
            
        })   
    }
    
    return (
        <section className="container-fluid">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-4">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {

                        await loginHandler(values)
                        setSubmitting(false);
                        }}
                    >
                        {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        }) => (
                        <form className="form-container" onSubmit={handleSubmit}>
                            <FormGroup label='Email' type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                            {errors.email && touched.email && errors.email}
                            <FormGroup label='Password' type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            {errors.password && touched.password && errors.password}
                            <div className="row justify-content-center">
                                <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>
                                Submit
                                </button>
                            </div>
                            
                        </form>
                        )}
                    </Formik>
                </section>
            </section>
        </section>
    )
};
  
  export default Login;