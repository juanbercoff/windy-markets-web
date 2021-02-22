import React from 'react';

const FormGroup = ({label, type, name, onChange, onBlur, value}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        </div>
    )
}

export default FormGroup;