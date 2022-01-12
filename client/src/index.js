import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

/**
 * redux
 */
import { Provider } from 'react-redux'
import {persistor, store} from './redux/rootReducer'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <PersistGate loading={ null } persistor={ persistor }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

