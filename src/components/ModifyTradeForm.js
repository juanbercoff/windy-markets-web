import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import FormGroup from './FormGroup';

const ModifyTradeForm = ({ tradeValues, onClose }) => {
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const submitTradeHandler = (data) => {
		let formData = new FormData();
		//TODO input validation
		formData.append('stock', data.stock);
		formData.append('contractType', data.contractType);
		formData.append('strike', data.strike);
		formData.append('expirationDate', data.expirationDate);
		formData.append('image', data.image);

		return fetch('/api/trades/' + tradeValues.id, {
			method: 'PUT',
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				console.log('Fetched');
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
							expirationDate: tradeValues.expirationDate,
							image: null,
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
									label="Expiration Date"
									type="date"
									name="expirationDate"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.expirationDate}
								/>
								<FormGroup
									label="Image"
									type="file"
									name="image"
									onChange={(event) => {
										setFieldValue('image', event.currentTarget.files[0]);
									}}
									onBlur={handleBlur}
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
