import React, { useState } from 'react';
import { Formik } from 'formik';
import FormGroup from './FormGroup';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	// Acepta .con el validator, en el backend no acepta. Revisar
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.min(6, 'Password should be longer than 6 characters')
		.max(50, 'Too Long!')
		.required('Required'),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Passwords must match'
	),
});

function Register() {
	const [registrationErrors, setRegistrationErrors] = useState([]);

	const removingRegistrationErrors = () => {
		setRegistrationErrors([]);
	};

	const history = useHistory();

	const registerHandler = (data) => {
		return fetch('/api/user/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
			}),
		})
			.then((res) => {
				if (res.status === 200) {
					return history.push('/');
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				return setRegistrationErrors([...registrationErrors, data.msg]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<section className="container-fluid form-wrapper">
			<section className="row justify-content-center">
				{registrationErrors.length > 0 ? (
					<div>
						<div
							className="alert alert-warning alert-dismissible fade show"
							role="alert"
						>
							<strong>Error!</strong> {registrationErrors[0]}
							<button
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
								onClick={removingRegistrationErrors}
							>
								X
							</button>
						</div>
					</div>
				) : null}
				<section className="col-12 col-sm-6 col-md-4 form-section">
					<h2>Register</h2>
					<Formik
						initialValues={{
							firstName: '',
							lastName: '',
							email: '',
							password: '',
							passwordConfirmation: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={async (values, { setSubmitting }) => {
							await registerHandler(values);
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
									label="First Name"
									type="text"
									name="firstName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
								/>
								{errors.firstName && touched.firstName}
								<FormGroup
									label="Last Name"
									type="text"
									name="lastName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
								/>
								{errors.lastName && touched.lastName}
								<FormGroup
									label="Email"
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email}
								<FormGroup
									label="Password"
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
								{errors.password && touched.password}
								<FormGroup
									label="Confirm password"
									type="password"
									name="passwordConfirmation"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.passwordConfirmation}
								/>
								{errors.passwordConfirmation && touched.passwordConfirmation}
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
		</section>
	);
}

export default Register;
