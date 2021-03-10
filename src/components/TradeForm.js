import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import FormGroup from './FormGroup';

const TradeForm = () => {
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const history = useHistory();

	const submitTradeHandler = (data) => {
		let formData = new FormData();
		//TODO input validation
		formData.append('stock', data.stock);
		formData.append('contractType', data.contractType);
		formData.append('strike', data.strike);
		formData.append('expirationDate', data.expirationDate);
		formData.append('image', data.image);

		console.log(formData);

		return fetch('/api/trades', {
			method: 'POST',
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				return history.push('/tradesList');
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
				<section className="col-12 col-sm-6 col-md-4">
					<Formik
						initialValues={{
							stock: '',
							contractType: '',
							strike: '',
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
								<FormGroup
									label="Option"
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

								<div className="row justify-content-center">
									<button
										className="btn btn-primary btn-block"
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
};

export default TradeForm;
