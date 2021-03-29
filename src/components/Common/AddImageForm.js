import React, { useState } from 'react';
import { Formik } from 'formik';
//import { useHistory } from 'react-router-dom';
import FormGroup from '../FormGroup';

const AddImageForm = ({ tradeValues, onClose }) => {
	const [errors, setErrors] = useState([]);

	const removingErrors = () => {
		setErrors([]);
	};

	const addImageHandler = (data) => {
		let formData = new FormData();
		formData.append('image', data.image);

		return fetch('/api/images/' + tradeValues.id, {
			method: 'POST',
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
			res.json().then((data) => {
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
							image: null,
						}}
						onSubmit={(values, { setSubmitting }) => {
							addImageHandler(values);
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
								<h4 className="text-center font-weight-bold"> Add Image </h4>
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

export default AddImageForm;
