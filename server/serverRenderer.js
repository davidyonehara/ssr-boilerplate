import fs from 'fs'
import store from '../src/store'
import path from 'path'
import App from './../src/App'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Cookies from 'universal-cookie'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

/**
 * Render a page route.
 *
 * @method serverRenderer
 * @param {object} req - Standard HTTP request object
 * @param {object} res - Standard HTTP response object
 * @param {function} next - Next middleware function
 *
 * @return {object} response object
 */
const serverRenderer = ( req, res, next ) => {
    console.log( '[Page Request]: ' + req.url )

    fs.readFile(
        path.resolve( './build/index.html' ),
        'utf8',
        ( err, data ) => {
            if ( err ) {
                console.error( err )
                res.status( 503 )
                res.send( '<html><body><h3>Internal Server Error (503)</h3></body></html>' )
            }

            let content = data.replace(
                '<div id="root"></div>',
                `<div id="root">${ ReactDOMServer.renderToString(
                    <Provider store={ store }>
                        <StaticRouter location={ req.url }>
                                <App />
                        </StaticRouter>
                    </Provider>
                ) }</div>`
            )

            const helmet = Helmet.renderStatic()

            content = content.replace('<title>React App</title>', `${ helmet.title.toString() }`)
            content = content.replace('<meta name="replace-helmet"/>', `${ helmet.meta.toString() }`)

            const cookies = new Cookies(req.headers.cookie)

            return res.send(
                content
            )
        }
    )
}

export default serverRenderer
