import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Listview from './Components/Listview';

import './sass/_main.scss';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Listview />
				</div>
			</div>
		</Router>
	);
}

export default App;
