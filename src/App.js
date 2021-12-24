import React, { lazy, Suspense } from 'react';
import './App.css';

const YoutubeForm1 = lazy(() => import('./components/formik/YoutubeForm1'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>loading ..</div>}>
				<YoutubeForm1 />
			</Suspense>
		</div>
	);
}

export default App;
