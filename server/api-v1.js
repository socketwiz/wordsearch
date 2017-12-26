
/**
 * Return a simple hello string
 *
 * @param {Object} request - HAPI request object
 * @param {Object} handle - HAPI handle object
 */
function getHello(request, handle) {
    return {'message': 'hello world!'};
}

module.exports = [
    {
        'method': 'GET',
        'path': '/api-v1/hello',
        'handler': getHello
    }
];
