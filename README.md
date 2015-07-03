# petit

Tinyiest possible logger. Node.js / IO.js.

# Install
     
    npm install petit

# Usage

    var logger = require('petit').get();
    logger.info('Hello there.');

# Scoping

If you have a moderately complex app with multiple modules or files, you can use petit's `.scope()` method which will prepend a string to the log output, showing where that output originated from. 

    logger.info('This is shown without any prefix.');

    var scoped = logger.scope('component');
    scoped.info('This will be shown with a "component" prefix before it.');

Now, Given that petit holds a shared reference for the logger initialized by `.get()`, you can have different scoped loggers that output to the same stream from different parts in your app. For example:

    // main.js
    var logger = require('petit').get();

    // other.js
    var logger = require('petit').get().scope('other');

# Exports

## petit.new(options)

Initializes a new logger instance with the given set of options.

## petit.get(options)

Return the last initialized logger instance. If none exists, initializes
a new one, and sets that one as the current.

    var logger = require('petit').get(options);

This function is also aliased as the module's root exports, meaning you can call it like this:

    var logger = require('petit')(options);

## petit.scope(string)

Shortcut for calling `.scope()` over the logger returned by `.get()`.

    var logger = require('petit').scope('something');

# Options

 - level: Log level. Options are: 'debug', 'info', 'notice', 'warn', 'error' and 'critical'. Default is `info`.
 - show_date: If false, hides the date from the log output. Defauts to `true`.
 - stream: Uses `stream` as the output stream where the log is written to. Defaults to `process.stdout`.
 - file: Creates a writeStream on `file` and uses it as the output stream. Optional.

# Example

    // index.js

    var logger = require('petit')(),
        engine = require('./engine');

    exports.boot = function() {
      logger.debug'Starting the engines...');
      engine.start(function() {
        logger.info('Engine started!');
      });
    }

    // engine.js

    var logger = require('petit').scope('engine');

    exports.start = function(cb) {
      if (cb == null)
        return logger.warn('No callback passed!');

      // (magic happens)
      cb();
    }

# Small print

Written by Tomás Pollak.
(c) Fork, Ltd. MIT License.
