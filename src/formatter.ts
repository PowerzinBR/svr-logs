import type { LogLevel, LoggerConfig } from './types.js';
import { LOG_LEVELS, COLORS } from './constants.js';

export class LogFormatter {
  constructor(private config: Required<LoggerConfig>) { }

  format(level: LogLevel, message: string): string {
    const levelConfig = LOG_LEVELS[level];
    let formatted = '';

    // info: add timestamp if enabled
    if (this.config.timestamp) {
      const timestamp = new Date().toISOString();
      formatted += this.config.colors
        ? `${COLORS.GRAY}[${timestamp}]${COLORS.RESET} `
        : `[${timestamp}] `;
    }

    const prefixLevel = `${this.config.prefix}:${level}`;

    if (this.config.colors) {
      formatted += `${levelConfig.color}${prefixLevel}${COLORS.RESET}: ${message}`;
    } else {
      formatted += `${prefixLevel}: ${message}`;
    }

    return formatted;
  }
}
