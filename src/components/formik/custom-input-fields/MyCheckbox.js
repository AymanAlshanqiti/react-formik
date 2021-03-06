import React from 'react';
import { useField } from 'formik';

export default function MyCheckbox({ children, ...props }) {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	return (
		<>
			<label className="checkbox-input">
				<input type="checkbox" {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
}
