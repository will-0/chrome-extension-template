import { ReduxedSetupListeners, ChangeListener } from 'reduxed-chrome-storage';
import { instantiateStoreServiceWorker } from '@state/store';
import { extensionIsActiveSelector } from '@state/general';

// Obtain a store instance and add listeners
const globalChangeListener: ChangeListener = (store, previousState) => {
    console.log("Service Worker: detected global state change")
}
const listeners: ReduxedSetupListeners = {
    onGlobalChange: globalChangeListener
};
const instantiateStore = instantiateStoreServiceWorker(listeners);

chrome.runtime.onInstalled.addListener(async () => {
    const store = await instantiateStore();

    // Other initialization code here
    console.log("Service Worker: onInstalled Called");
})

chrome.runtime.onStartup.addListener(async () => {
    const store = await instantiateStore();

    // Other initialization code here
    console.log("Service Worker: onStartup Called");
})

chrome.runtime.onMessage.addListener(async (message: any, sender, sendResponse) => {
    const store = await instantiateStore();

    // Other initialization code here
    console.log("Service Worker: onMessage Called");
});