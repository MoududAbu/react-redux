import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { userReducer } from './reducers/userReducers';
import { productReducer } from './reducers/productReducers';

import { createStore, combineReducers } from 'redux'

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer,
});

const store = createStore(allReducers, {
    products: [{ name: 'iphone' }],
    user: 'Michael'
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(store.getState());




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
