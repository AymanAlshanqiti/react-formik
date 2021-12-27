import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';
import MyCheckbox from './MyCheckbox';
import MySelect from './MySelect';

const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	acceptedTerms: Yup.boolean()
		.required('Required')
		.oneOf([true], 'You must accept the terms and conditions.'),
	jobType: Yup.string()
		.oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
		.required('Required'),
});

export default function SignupForm() {
	return (
		<>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={{
					email: '',
					firstName: '',
					lastName: '',
					acceptedTerms: false,
					jobType: '',
				}}
				validationSchema={validationSchema}
				onSubmit={values => {
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<MyTextInput
						label="First Name"
						name="firstName"
						type="text"
						placeholder="Ayman"
					/>

					<MyTextInput
						label="Last Name"
						name="lastName"
						type="text"
						placeholder="Alshanqiti"
					/>

					<MyTextInput
						label="Email"
						name="email"
						type="email"
						placeholder="abc@abc.com"
					/>

					<MySelect label="Job Type" name="jobType">
						<option value="">Select a job type</option>
						<option value="designer">Designer</option>
						<option value="development">Developer</option>
						<option value="product">Oroduct Manager</option>
						<option value="other">Other</option>
					</MySelect>

					<MyCheckbox name="acceptedTerms">
						I accept the terms and conditions
					</MyCheckbox>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
}
