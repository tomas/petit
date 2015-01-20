var logger = require('./').new({ level: 'debug' });

logger.info('Testing 123.');
logger.info('Testing 123.');
logger.debug('Testing 123.');
logger.debug('Testing 123.');
// logger.notice('Testing 123.');
logger.debug('Testing 123.');
logger.warn('Testing 123.');
logger.debug('Testing 123.');
logger.critical('Testing 123.');
logger.debug('Testing 123.');
// logger.notice('Testing 123.');
logger.error('Testing 123.');
logger.error('Testing 123.');
logger.debug('Testing 123.');
logger.info('Testing 123.', 'foobar');

logger.pause();

logger.info('Not appearing.');

logger.resume();

logger.critical('After testing 123.');
logger.debug('Testing 123.');
// logger.notice('Testing 123.');
logger.error('Testing 123.');

prefixed = logger.prefix('agent');
prefixed.error('Foobar');
prefixed.info('13123123');
