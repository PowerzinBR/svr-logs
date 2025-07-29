import type { LogLevel, LogLevelConfig } from '../types';

export const LOG_LEVELS: Record<LogLevel, LogLevelConfig> = {
  debug: { priority: 0, color: '\x1b[36m', method: 'log' },     // Cyan
  info: { priority: 1, color: '\x1b[32m', method: 'info' },     // Green  
  warn: { priority: 2, color: '\x1b[33m', method: 'warn' },     // Yellow
  error: { priority: 3, color: '\x1b[31m', method: 'error' }    // Red
};

export const COLORS = {
  RESET: '\x1b[0m',
  GRAY: '\x1b[90m',
  CYAN: '\x1b[36m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  RED: '\x1b[31m',
} as const;
