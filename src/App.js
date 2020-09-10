import React, { Component } from 'react'
import { SITE_CONFIG } from './constants.js'
import { Switch, Route } from 'react-router'

import './styles/app.scss'

class App extends Component {
    render() {
        let { routes } = SITE_CONFIG
        return (
            <div className="App">
                <div className="app-body">
                    <Switch>
                        { routes.map( ( route, index ) => <Route
                            key={ index }
                            exact={ route.exact }
                            path={ route.path }
                            component={ route.template } />
                        )}
                    </Switch>
                </div>
            </div>
        )
    }
}


export default App
