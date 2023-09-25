import {
  setupReduxed, ReduxedSetupOptions
} from 'reduxed-chrome-storage';
import { configureStore } from '@reduxjs/toolkit';

import generalStateReducer from './features/general'

const storeCreatorContainer = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      general: generalStateReducer
    }
  });
}

const options: ReduxedSetupOptions = {};

const instantiateStore = setupReduxed(storeCreatorContainer, options);

export default instantiateStore;