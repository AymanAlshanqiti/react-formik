import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function YoutubeForm2() {
	const initialValues = {
		name: '',
		email: '',
		channel: '',
	};

	const onSubmit = values => {
		console.log('form data', values);
	};

	let validationSchema = Yup.object({
		name: Yup.string().min(2).required(),
		email: Yup.string().email().required(),
		channel: Yup.string().required(),
	});

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<Form className="col-3" style={{ textAlign: 'left' }}>
				<div className="row justify-content-start mx-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<Field type="text" id="name" name="name" className="form-control" />
					<ErrorMessage name="name" />
				</div>

				<div className="row justify-content-start mx-3">
					<label htmlFor="email" className="form-label mt-3">
						E-mail
					</label>
					<Field
						type="email"
						id="email"
						name="email"
						className="form-control"
					/>
					<ErrorMessage name="email" />
				</div>

				<div className="row justify-content-start mx-3">
					<label htmlFor="channel" className="form-label mt-3">
						Channel
					</label>
					<Field
						type="text"
						id="channel"
						name="channel"
						className="form-control"
					/>
					<ErrorMessage name="channel" />
				</div>

				<button className="btn btn-success mt-4 mx-3" type="submit">
					Submit
				</button>
			</Form>
		</Formik>
	);
}

export default YoutubeForm2;
