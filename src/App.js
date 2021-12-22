import React, { lazy, Suspense } from 'react';
import './App.css';
// import MyLazyComponent from './components/MyLazyComponent';
const MyLazyComponent = lazy(() => import('./components/MyLazyComponent'));
const MyLazyComponent2 = lazy(() => import('./components/MyLazyComponent'));
function App() {
	return (
		<div className="App">
			Hi this is app container
			<Suspense fallback={<div>loading 1 ..</div>}>
				<MyLazyComponent />
			</Suspense>
			<Suspense fallback={<div>loading 2 ..</div>}>
				<MyLazyComponent2 />
			</Suspense>
		</div>
	);
}

export default App;
