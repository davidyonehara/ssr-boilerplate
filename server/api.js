import request from 'request'

/**
 * Pass a request specifically to Dynamo.
 *
 * @method dynamoAPI
 * @param {object} req - Standard HTTP request object
 * @param {object} res - Standard HTTP response object
 * @param {function} next - Next middleware function
 *
 * @return {object} response object
 */
export const dynamoAPI = ( req, res, next ) => {
    console.log( '[API Request]: [Dynamo]: ' + req.url )
    const batchGet = ( Object.keys( req.query ).length === 0 ) ? true : false
    const params = { TableName: req.params.table }
    if ( !batchGet ) { params.Key = req.query }

        dynamoDBRequest( params, batchGet, function( err, data ) {
        if ( err ) {
            res.status( err.statusCode ).send({
                message: err.message,
                code: err.statusCode
            })
        } else {
            if ( Object.keys( data ).length === 0 ) {
                res.status(400).send({
                    message: 'Project Not Found',
                    code: 400
                })
            } else {
                res.send( data )
            }
        }
    } )
}

/**
 * Send request to AWS DynamoDB.
 *
 * @method dynamoDBRequest
 * @param {string} table - Name of table to lookup
 * @param {object} params - Query parameters
 *
 * @return {object} response object
 */
const dynamoDBRequest = ( params, batchGet = false, callback ) => {
    const AWS = require( 'aws-sdk' );
    AWS.config.update({ region: 'us-west-1' });
    const documentClient = new AWS.DynamoDB.DocumentClient();

    if ( batchGet ) {
        documentClient.scan( params, function( err, data ) {
            callback( err, data )
        } );
    } else {
        documentClient.get( params, function( err, data ) {
            callback( err, data )
        } );
    }
}

/**
 * Pass a request through to a generic API endpoint.
 *
 * @method genericAPI
 * @param {object} req - Standard HTTP request object
 * @param {object} res - Standard HTTP response object
 * @param {function} next - Next middleware function
 *
 * @return {object} response object
 */
export const genericAPI = ( req, res, next ) => {
    console.log( '[API Request]: [Generic]: ' + req.url )
}
