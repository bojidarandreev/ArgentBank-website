import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root.reducer.js'; //Assuming you have a root reducer defined

const store = configureStore({ reducer: rootReducer });

export default store;