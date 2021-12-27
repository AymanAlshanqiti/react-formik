import React, { lazy, Suspense } from 'react';

const SignupForm = lazy(() =>
	import('./components/formik/custom-input-fields/SignupForm')
);

function App() {
	return (
		<>
			<Suspense fallback={<div>loading ..</div>}>
				<SignupForm />
			</Suspense>
		</>
	);
}

export default App;
