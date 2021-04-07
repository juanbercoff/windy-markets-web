import React, { useState } from 'react';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-dom';
import FormGroup from '../FormGroup';

const ModifyTradeForm = ({ tradeValues, onClose }) => {
	//const history = useHistory();
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const submitTradeHandler = (data) => {
		return fetch('/api/trades/' + tradeValues.id, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
			res.json().then((data) => {
				return setErrors([...errors, data.msg]);
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
							stock: tradeValues.stock,
							contractType: tradeValues.contractType,
							strike: tradeValues.strike,
							price: tradeValues.price,
							expirationDate: tradeValues.expirationDate,
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
								<h4 className="text-center font-weight-bold"> Modify Trade </h4>
								<FormGroup
									label="Stock"
									type="text"
									name="stock"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.stock}
								/>
								<FormGroup
									label="Contract Type"
									type="text"
									name="contractType"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.contractType}
								/>
								<FormGroup
									label="Strike"
									type="text"
									name="strike"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.strike}
								/>
								<FormGroup
									label="Price"
									type="text"
									name="price"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.price}
								/>
								<FormGroup
									label="Expiration Date"
									type="date"
									name="expirationDate"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.expirationDate}
								/>

								<div className="row justify-content-around">
									<button
										className="btn btn-dark btn-block mt-4"
										type="submit"
										disabled={isSubmitting}
									>
										Submit
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

export default ModifyTradeForm;
