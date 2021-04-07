import React, { useState } from 'react';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-dom';
import FormGroup from '../FormGroup';

const AddUserTrade = ({ tradeValues, onClose }) => {
	const [errors, setErrors] = useState([]);
	const userId = localStorage.getItem('userId');
	const removingErrors = () => {
		setErrors([]);
	};

	const submitTradeHandler = (data) => {
		let formData = new FormData();
		//TODO input validation
		formData.append('price', data.price);
		formData.append('amount', data.amount);
		if (data.image) {
			formData.append('image', data.image);
		}

		return fetch('/api/userTrades/' + tradeValues.id + '/' + userId, {
			method: 'POST',
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				console.log('success');
				return window.location.reload();
			}
			res.json().then((data) => {
				setErrors([...errors, data.msg]);
				return console.log(data);
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
							amount: '',
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
								<h4 className="text-center font-weight-bold"> Follow Trade </h4>
								<FormGroup
									label="Price"
									type="number"
									name="price"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.price}
								/>
								<FormGroup
									label="Contracts"
									placeholder={'Amount of contracts'}
									type="number"
									name="amount"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.amount}
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

export default AddUserTrade;
