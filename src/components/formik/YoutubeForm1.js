import { useFormik } from 'formik';
import * as Yup from 'yup';

function YoutubeForm1() {
	const initialValues = {
		name: '',
		email: '',
		channel: '',
	};

	const onSubmit = values => {
		console.log('form data', values);
	};

	const validate = values => {
		let errors = {
			name: '',
			email: '',
			channel: '',
		};

		if (!values.name) {
			errors.name = 'Name is required';
		}

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email format';
		}

		if (!values.channel) {
			errors.channel = 'Channel is required';
		}

		return errors;
	};

	let validationSchema = Yup.object({
		name: Yup.string().min(4, 'At least 4 character').required(),
		email: Yup.string().email().required(),
		channel: Yup.string().required(),
	});

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: onSubmit,
		validationSchema: validationSchema,
	});

	return (
		<div className="row justify-content-center">
			<form
				className="col-3"
				style={{ textAlign: 'left' }}
				onSubmit={formik.handleSubmit}
			>
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="form-control"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className="error">{formik.errors.name}</div>
				) : null}

				<label htmlFor="email" className="form-label mt-3">
					E-mail
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="form-control"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}

				<label htmlFor="channel" className="form-label mt-3">
					Channel
				</label>
				<input
					type="text"
					id="channel"
					name="channel"
					className="form-control"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.channel}
				/>
				{formik.touched.channel && formik.errors.channel ? (
					<div className="error">{formik.errors.channel}</div>
				) : null}

				<button className="btn btn-success mt-4" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default YoutubeForm1;
