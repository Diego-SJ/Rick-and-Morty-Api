import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listview from '../Components/Listview';
import { getAllCharacters, getAllLocations, getAllEpisodes } from '../util/Api';

export default function index() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Listview type='char' list={getAllCharacters()} />
				</Route>
				<Route exact path='/locations'>
					<Listview type='loc' list={getAllLocations()} />
				</Route>
				<Route exact path='/episodes'>
					<Listview type='loc' list={getAllEpisodes()} />
				</Route>
			</Switch>
		</>
	);
}
