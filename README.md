# petit

Tinyiest possible logger. Node.js / IO.js.

# Usage

    var logger = require('petit').new();
    logger.info('Hello there.');

# Exports

## petit.new(options)

Initializes a new logger instance with the given set of options.

## petit.current(options)

Return the last initialized logger instance. If none exists, initializes
a new one, and sets that one as the current.

# Options

 - level: Log level. Options are: 'debug', 'info', 'notice', 'warn', 'error' and 'critical'. Default is `info`.
 - show_date: If false, hides the date from the log output. Defauts to `true`.
 - stream: Uses `stream` as the output stream where the log is written to. Defaults to `process.stdout`.
 - file: Creates a writeStream on `file` and uses it as the output stream. Optional.

# Example

    // index.js

    var logger = require('petit').current(),
        engine = require('./engine');

    exports.boot = function() {
      logger.debug'Starting the engines...');
      engine.start(function() {
        logger.info('Engine started!');
      });
    }

    // engine.js

    var logger = require('petit').current();

    exports.start = function(cb) {
      if (cb == null)
        return logger.warn('No callback passed!');

      // (magic happens)
      cb();
    }

# Small print

Written by Tomás Pollak.
(c) Fork, Ltd. MIT License.