import React from 'react';
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";





const Login = () => {
    let history = useHistory();

    const loginHandler = (data) => {
        //TODO input validation
        return fetch('http://3a2d47845b10.ngrok.io/api/user/login', {
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
        <section class="container-fluid">
            <section class="row justify-content-center">
                <section class="col-12 col-sm-6 col-md-4">
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
                        <form class="form-container" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <h4 class="text-center font-weight-bold"> Login </h4>
                                <label for="InputEmail1">Email Address</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                </div>
                            {errors.email && touched.email && errors.email}
                            <div class="form-group">
                                <label for="InputPassword1">Password</label>
                                <input
                                    class="form-control"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>
                            <div class="row justify-content-center">
                                <button class="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>
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