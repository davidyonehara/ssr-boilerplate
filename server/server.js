import express from 'express'
import { dynamoAPI, genericAPI }  from './api'
import serverRenderer from './serverRenderer'
import staticRenderer from './staticRenderer'

// Setup the server
const PORT = 8080
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()

// Prevent the app from choking on browser objects that dont exist in node
global.document = undefined
global.window = undefined


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Direct API traffic to API endpoint
app.use( '/api/dynamo/:table', dynamoAPI )

// Direct API traffic to API endpoint
app.use( '/api', genericAPI )

// Serve up static files from build folder
router.use( staticRenderer )

// Serve up pre rendered page
router.use( '/', serverRenderer )

app.use( router )

app.listen( PORT, () => {
    console.log(`Express Server running on port: ${ PORT }`)
})
