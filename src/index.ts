export type { LogLevel, LoggerConfig, LogLevelConfig } from './types.js';

export { Logger } from './logger.js';

export { LOG_LEVELS, COLORS } from './constants.js';
export { LogFormatter } from './formatter.js';

import type { LoggerConfig } from '../types.js';
import { Logger } from './logger.js';

export const logger = new Logger();

export const debug = (message: string, ...args: any[]) => logger.debug(message, ...args);
export const info = (message: string, ...args: any[]) => logger.info(message, ...args);
export const warn = (message: string, ...args: any[]) => logger.warn(message, ...args);
export const error = (message: string, ...args: any[]) => logger.error(message, ...args);

export const createLogger = (config?: LoggerConfig): Logger => {
  return new Logger(config);
};
