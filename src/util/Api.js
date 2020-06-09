import axios from 'axios';

export const getAllCharacters = async () => {
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/character/');
		return res.data.results;
	} catch (e) {
		console.log(e.text);
		return null;
	}
};

export const getSingleCharacter = async (id) => {
	try {
		const res = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`,
		);
		return res.data;
	} catch (e) {
		console.log(e.text);
		return null;
	}
};

export const getAllLocations = async () => {
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/location/');
		return res.data.results;
	} catch (e) {
		console.log(e.text);
		return null;
	}
};

export const getAllEpisodes = async () => {
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/episode/');
		return res.data.results;
	} catch (e) {
		console.log(e.text);
		return null;
	}
};
