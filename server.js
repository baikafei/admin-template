var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('../admin-template')).listen(5000);
