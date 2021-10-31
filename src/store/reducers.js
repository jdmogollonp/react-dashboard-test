import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import accountReducer from './accountReducer';
import projectReducer from './projectReducer';

const reducers = combineReducers({
    account: persistReducer(
        {
            key: 'account',
            storage,
            keyPrefix: 'datta-'
        },
        accountReducer,       

    ),
    project: persistReducer(
        {
            key: 'project',
            storage,
            keyPrefix: 'datta-'
        },
        projectReducer,       

    ),

    form: formReducer
});

export default reducers;
