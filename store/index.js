import { createStore, compose, applyMiddleware } from 'redux';

import reducers from '../reducers';

const thunk = require('redux-thunk').default

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;