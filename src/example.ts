import { Logger, createLogger, debug, info, warn, error } from './index.js';

console.log('=== Default Logger ===');
debug('This is a debug message');
info('Application started successfully');
warn('This is a warning message');
error('Auth failed to initialize');

console.log('\n=== Custom Logger ===');
const authLogger = createLogger({
  prefix: 'auth',
  level: 'debug',
  timestamp: true
});

authLogger.debug('Checking credentials');
authLogger.info('User authenticated successfully');
authLogger.warn('Token expires soon');
authLogger.error('Invalid credentials provided');

console.log('\n=== Child Logger ===');
const dbLogger = authLogger.child('database');
dbLogger.info('Connected to database');
dbLogger.error('Query failed');

console.log('\n=== Configuration Changes ===');
const configLogger = new Logger({ prefix: 'config' });
configLogger.info('Default colors enabled');

configLogger.enableColors(false);
configLogger.info('Colors disabled');

configLogger.enableTimestamp(true);
configLogger.info('Timestamp enabled');

configLogger.setLevel('error');
configLogger.debug('This debug won\'t show');
configLogger.info('This info won\'t show');
configLogger.error('Only errors show now');

