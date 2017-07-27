import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import myCreateStores from './store'

import {createStore, combineReducers, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'

const browserHistory = createHistory()
const stores = myCreateStores(browserHistory)
const history = syncHistoryWithStore(browserHistory, stores)

ReactDOM.render(
<Provider store={stores}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
