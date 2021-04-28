import React, { useState } from 'react';
import { Formik } from 'formik';
import FormGroup from './FormGroup';

const TradeForm = ({ onClose }) => {
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
		formData.append('price', data.price === '' ? null : data.price);
		formData.append('expirationDate', data.expirationDate);
		formData.append('image', data.image);

		return fetch('/api/trades', {
			method: 'POST',
			body: formData,
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
			<section className="col-12 col-sm-6 col-md-4">
				<Formik
					initialValues={{
						stock: '',
						contractType: '',
						strike: '',
						price: '',
						expirationDate: '',
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
							<h4 className="text-center font-weight-bold"> Add Trade </h4>
							<FormGroup
								label="Symbol"
								type="text"
								name="stock"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.stock}
							/>
							<label>Option</label>
							<select
								onChange={handleChange}
								onBlur={handleBlur}
								className="form-select"
								aria-label="Option"
								name="contractType"
							>
								<option hidden value="">
									Select an option
								</option>
								<option value="Put">Put</option>
								<option value="Call">Call</option>
							</select>
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
								type="number"
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
							<FormGroup
								label="Image"
								type="file"
								name="image"
								onChange={(event) => {
									setFieldValue('image', event.currentTarget.files[0]);
								}}
								onBlur={handleBlur}
							/>

							<div className="row justify-content-center">
								<button
									className="btn btn-primary btn-block mt-4"
									type="submit"
									disabled={isSubmitting}
								>
									Submit
								</button>
								<button
									className="btn btn-dark btn-block mt-2"
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
	);
};

export default TradeForm;
