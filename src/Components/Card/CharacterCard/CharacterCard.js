import React from 'react';

import './CharacterCard.scss';

export default function CharacterCard(props) {
	const { name, image } = props.data;
	const { onClick } = props;
	return (
		<div onClick={() => onClick()} className='character-card'>
			<div
				className='photo'
				style={{
					backgroundImage: `url(${image})`,
				}}
			/>
			<div className='info'>
				<p>{name}</p>
			</div>
		</div>
	);
}
