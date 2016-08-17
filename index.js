var through = require("through2");
var gutil = require("gulp-util");

function replaceContent(content, opts) {
	return opts.match ? content.replace(opts.match, '') : content;
}

module.exports = function(options) {
	"use strict";

	function removeContent(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-remove-content", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			file.contents = new Buffer(replaceContent(String(file.contents), options));

			this.push(file);

		}
		return callback();
	}

	return through.obj(removeContent);
};