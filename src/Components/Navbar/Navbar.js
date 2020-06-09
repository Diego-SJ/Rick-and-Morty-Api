import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='item item-1'>
					<span>Characters</span>
				</Link>
				<Link to='/locations' className='item item-2'>
					<span>Locations</span>
				</Link>
				<Link to='/episodes' className='item item-3'>
					<span>Episodes</span>
				</Link>
			</nav>
		</>
	);
}
