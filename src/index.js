import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import todoApp from './data/reducers';
import {fetchTodos} from './data/actions';
import thunk from 'redux-thunk';

const store = createStore(todoApp, applyMiddleware(thunk));

store
  .dispatch(fetchTodos());

ReactDOM.render(<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
