import {
  setupReduxed, ReduxedSetupOptions, ReduxedSetupListeners
} from 'reduxed-chrome-storage';
import { configureStore } from '@reduxjs/toolkit';

import generalStateReducer from './general'

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
const instantiateStoreServiceWorker = (listeners: ReduxedSetupListeners) => setupReduxed(storeCreatorContainer, options, listeners)

export default instantiateStore;
export { instantiateStoreServiceWorker }