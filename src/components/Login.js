import React, { useState } from 'react';
import { Formik } from 'formik';
import FormGroup from './FormGroup';

const Login = () => {
	const [msg, setMsg] = useState(null);

	const loginHandler = (data) => {
		//TODO input validation
		return fetch('/api/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: data.email, password: data.password }),
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					setMsg(res);
					throw new Error('bad login');
				}
			})
			.then((data) => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('role', data.role);
				localStorage.setItem('userId', data.userId);
				return window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<section className="form-wrapper">
			{msg && (
				<div
					class="alert alert-warning alert-dismissible fade show"
					role="alert"
				>
					<strong>Wrong email or password</strong> Your email or password is
					wrong. Please try again.
					<button
						type="button"
						class="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)}
			<section className="form-section">
				<h2>Login</h2>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
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
						await loginHandler(values);
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
							<FormGroup
								label="Email"
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && errors.email}
							<FormGroup
								label="Password"
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && touched.password && errors.password}
							<div className="row justify-content-center">
								<button
									className="btn btn-dark btn-block form-button"
									type="submit"
									disabled={isSubmitting}
								>
									Submit
								</button>
							</div>
						</form>
					)}
				</Formik>
			</section>
		</section>
	);
};

export default Login;
