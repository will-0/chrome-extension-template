import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Popup'
import './index.css'
import { Provider } from 'react-redux'
import instantiateStore from '@state/store'

instantiateStore().then(store => {
    ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
    </React.StrictMode>
    )
})