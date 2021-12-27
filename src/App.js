import React, { lazy, Suspense } from 'react';
import './App.css';

const YoutubeForm2 = lazy(() => import('./components/formik/YoutubeForm2'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>loading ..</div>}>
				<YoutubeForm2 />
			</Suspense>
		</div>
	);
}

export default App;
