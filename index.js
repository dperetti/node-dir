var key,
    path = require('path'),
    dirpaths = require(__dirname + '/lib/paths');

for (key in dirpaths) {
	if (dirpaths.hasOwnProperty(key)) exports[key] = dirpaths[key];
}

exports.readFiles = require('./lib/readfiles');
exports.readFilesStream = require('./lib/readfilesstream');
