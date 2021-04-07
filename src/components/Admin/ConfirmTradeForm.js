import React, { useState } from 'react';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-dom';
import FormGroup from '../FormGroup';

const ConfirmTradeForm = ({ tradeValues, onClose, requestURL }) => {
	//const history = useHistory();
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const submitTradeHandler = (data) => {
		//TODO input validation
		console.log(data.price);
		return fetch('/api/trades/confirm/' + tradeValues.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				price: data.price,
			}),
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
			res.json().then(() => {
				return console.log('Trade was confirmed');
			});
		});
	};

	return (
		<section className="container-fluid">
			<section className="row justify-content-center">
				{errors.length > 0 ? (
					<div>
						<div
							className="alert alert-warning alert-dismissible fade show"
							role="alert"
						>
							<strong>Error!</strong> {errors[0]}
							<button
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
								onClick={removingErrors}
							>
								X
							</button>
						</div>
					</div>
				) : null}
				<section>
					<Formik
						initialValues={{
							price: '',
						}}
						onSubmit={async (values, { setSubmitting }) => {
							await submitTradeHandler(values);
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
							setFieldValue,
						}) => (
							<form
								encType="multipart/form-data"
								className="form-container"
								onSubmit={handleSubmit}
							>
								<h4 className="text-center font-weight-bold">
									{' '}
									Confirm Trade{' '}
								</h4>
								<FormGroup
									label="Price"
									type="number"
									name="price"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.price}
								/>

								<div className="row justify-content-around">
									<button
										className="btn btn-dark btn-block mt-4"
										type="submit"
										disabled={isSubmitting}
									>
										Confirm Trade
									</button>
									<button
										className="btn btn-secondary btn-block mt-2"
										type="button"
										onClick={onClose}
									>
										Cancel
									</button>
								</div>
							</form>
						)}
					</Formik>
				</section>
			</section>
		</section>
	);
};

export default ConfirmTradeForm;
