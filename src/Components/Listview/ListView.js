import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import { getAllCharacters, getSingleCharacter } from '../../util/Api';
import CharacterCard from '../Card/CharacterCard';
import CharacterDetail from '../Card/CharacterDetail';

import './ListView.scss';

export default function ListView() {
	const [data, setData] = useState([]);
	const [showDetails, setShowDetails] = useState(false);
	const [character, setCharacter] = useState({});

	const initList = async () => {
		setData(await getAllCharacters());
	};

	useEffect(() => {
		initList();
	}, []);

	const showDetail = async (id) => {
		const detail = await getSingleCharacter(id);
		setCharacter(detail);
		setShowDetails(true);
	};

	return (
		<>
			{!showDetails ? (
				<div className='list-view'>
					{map(data, (item) => (
						<CharacterCard
							onClick={() => showDetail(item.id)}
							key={item.id}
							data={item}
						/>
					))}
				</div>
			) : (
				<CharacterDetail setShowDetails={setShowDetails} data={character} />
			)}
		</>
	);
}
