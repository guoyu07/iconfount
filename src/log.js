"use strict";

var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'filelog',
      filename: 'fount.log',
      level: 'verbose'
    }),
    new (winston.transports.Console)({
      level: 'warn'
    })
  ]
});

module.exports = logger;
