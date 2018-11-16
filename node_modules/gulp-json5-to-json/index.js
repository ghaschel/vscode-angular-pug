const path = require('path');
const map = require('map-stream');
const JSON5 = require('json5');
const { PluginError } = require('gulp-util');
const PLUGIN_NAME = 'gulp-json5-to-json';

module.exports = (options = {}) => {
	options.beautify = options.hasOwnProperty('beautify') ? !!options.beautify : true;

	function parseJSON5(file, callback) {
		let obj = {};

		if (!file.isNull()) {
			try {
				obj = JSON5.parse(file.contents + '');
			} catch (err) {
				const lines = err.text.split(/\n/);

				// Find the line causing error
				let line = 0;

				for (let pos = 0; pos < err.at && line < lines.length; line += 1) {
					pos += lines[line].length;
				}

				// Report the error using a gcc message format like
				// When the file content is a single line, displays the position instead of the line.
				throw new PluginError(PLUGIN_NAME, `${file.relative}:${line || err.at}: ${err.message}`);
			}
		}

		file.contents = new Buffer(JSON5.stringify(obj, null, options['beautify'] ? 4 : null));
		file.path = path.join(path.dirname(file.path), path.basename(file.path, path.extname(file.path)) + '.json');

		callback(null, file);
	}

	return map(parseJSON5);
};
