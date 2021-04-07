import React, { useState } from 'react';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-dom';
import FormGroup from '../FormGroup';

const CloseTradeForm = ({ tradeValues, onClose, requestURL }) => {
	//const history = useHistory();
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const submitTradeHandler = (data) => {
		//TODO input validation

		return fetch(requestURL + tradeValues.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ closePrice: data.closePrice }),
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
							closePrice: '',
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
								<h4 className="text-center font-weight-bold"> Close Trade </h4>
								<FormGroup
									label="Close Price"
									type="number"
									name="closePrice"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.closePrice}
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

export default CloseTradeForm;
