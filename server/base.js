'use strict';

const winston = require('winston');

const log = new (winston.Logger)({
    'transports': [
        new (winston.transports.Console)(),
        new (winston.transports.File)({'filename': 'error.log'})
    ]
});

module.exports.log = log;
