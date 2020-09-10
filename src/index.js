import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './store'
import App from './App'


const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Provider store={ store }>
            <Router history={ history }>
                <App/>
            </Router>
        </Provider>
    )
}

ReactDOM.hydrate( <AppRouter />, document.getElementById( 'root' ) )
