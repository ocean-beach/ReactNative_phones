/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/mainReducers';
import App from './App';
import {name as appName} from './app.json';

const store = createStore(combineReducers({reducer}), applyMiddleware(thunk));

// Pass the store into the Provider
const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
