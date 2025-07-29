/** Child loggers example test file. */
import { createLogger } from './src/index.js';

const appLogger = createLogger({ prefix: 'app' });
const dbLogger = appLogger.child('database');
const authLogger = appLogger.child('auth');

dbLogger.info('Connected to PostgreSQL');     // app:database:info: Connected to PostgreSQL
authLogger.warn('Token expires in 5 minutes'); // app:auth:warn: Token expires in 5 minutes

