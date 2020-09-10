import express from 'express'
import path from 'path'

const staticRenderer = express.static( path.resolve( __dirname, '..', 'build' ), { index: false, maxAge: '9h', setHeaders: headerByFileType } )

/**
 * Set max-age for static files and compiled assets.
 *
 * @method headerByFileType
 * @param {object} res - Standard HTTP response object
 * @param {string} path - Request path
 */
function headerByFileType( res, path ) {

    // Set longer age for static assets
    if ( ['chunk.js', 'chunk.css', 'jpg', 'png', 'gif', 'svg', 'webp'].some( function( type ) { return !!~path.indexOf( type ) } ) ) {
        res.set( 'Cache-Control', 'public, max-age=31557601' )
    }
}

export default staticRenderer
