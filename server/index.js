'use strict';

const base = require('./base');
const IS_DEV = process.env.NODE_ENV !== 'production';
const NGROK = (IS_DEV && process.env.ENABLE_TUNNEL) && require('ngrok');
const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');
const port = process.env.PORT || 8080;
const routes = require('./api-v1');
const server = new Hapi.Server({
    'port': port,
    'routes': {
        'files': {
            'relativeTo': path.join(`${__dirname}/../`, 'build')
        }
    }
});
const provision = async () => {
    await server.register(Inert);

    // return anything in the build directory
    server.route({
        'method': 'GET',
        'path': '/{param*}',
        'handler': {
            'directory': {
                'path': '.',
                'redirectToSlash': true,
                'index': true
            }
        }
    });

    // api calls
    server.route(routes);
    server.events.on('response', function response(request) {
        const remoteAddress = request.info.remoteAddress;
        const method = request.method.toUpperCase();
        const path = request.url.path;
        const statusCode = request.response.statusCode;

        base.log.info(`${remoteAddress}: ${method} ${path} --> ${statusCode}`);
    });

    try {
        await server.start();
    } catch (error) {
        if (error) {
            base.log.error(error);
            throw error;
        }
    }

    // Connect to ngrok in dev mode
    if (NGROK) {
        NGROK.connect(port, (innerErr, url) => {
            if (innerErr) {
                return base.log.error(innerErr);
            }

            base.log.info(`Proxy: ${url}`);
        });
    }

    base.log.info(`LAN: ${server.info.uri}`);
};

provision();
