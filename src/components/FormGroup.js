import React from 'react';

const FormGroup = ({
	label,
	type,
	name,
	onChange,
	onBlur,
	value,
	placeholder,
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				className="form-control"
				type={type}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default FormGroup;
