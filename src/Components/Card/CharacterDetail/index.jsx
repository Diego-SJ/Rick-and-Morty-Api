import React from 'react';

import './CharacterDetail.scss';

export default function index(props) {
	const { data, setShowDetails } = props;

	return (
		<div className='character-detail'>
			<img src={data.image} alt={data.name} />
			<ul>
				<li>
					<b>Name: </b>
					{data.name}
				</li>
				<li>
					<b>Status: </b>
					{data.status}
				</li>
				<li>
					<b>Species: </b>
					{data.species}
				</li>
				<li>
					<b>Gender: </b>
					{data.gender}
				</li>
				<li>
					<b>Origin: </b>
					{data.origin.name}
				</li>
				<li>
					<b>Location: </b>
					{data.location.name}
				</li>
			</ul>
			<button onClick={() => setShowDetails(false)}>Ok</button>
		</div>
	);
}
