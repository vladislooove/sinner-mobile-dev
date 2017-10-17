import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedStore from './src/reducers/';

import Router from './src/containers/Router';

let store = createStore(combinedStore, applyMiddleware(thunk));

export default class App extends React.Component {
	render() {
		return (
		    <Provider store={store}>
				<Router />
			</Provider>
		);
	}
}