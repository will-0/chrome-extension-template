import {
    setupReduxed, diffDeep, isEqual,
    ReduxedSetupOptions, ReduxedSetupListeners, ChangeListener
} from 'reduxed-chrome-storage';
import { instantiateStoreServiceWorker } from '@state/store';
import { extensionIsActiveSelector } from '@state/general';

const globalChangeListener: ChangeListener = (store, previousState) => {
    const state = store.getState();
    if (!isEqual(extensionIsActiveSelector(state), extensionIsActiveSelector(previousState))) {
        console.log("Active status has changed to ", extensionIsActiveSelector(state))
    }
};

const listeners: ReduxedSetupListeners = {
    onGlobalChange: globalChangeListener
};

const instantiateStore = instantiateStoreServiceWorker(listeners);

async function onStartup() {
    // Obtain a store instance
    const store = await instantiateStore();
    const state = store.getState();
    console.log("Active state on service worker startup: ", extensionIsActiveSelector(state));
}

onStartup()

export {}
