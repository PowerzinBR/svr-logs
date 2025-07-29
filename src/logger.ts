import type { LogLevel, LoggerConfig } from './types.js';
import { LOG_LEVELS } from './constants.js';
import { LogFormatter } from './formatter.js';

export class Logger {
  private config: Required<LoggerConfig>;
  private formatter: LogFormatter;

  constructor(config: LoggerConfig = {}) {
    this.config = {
      prefix: config.prefix || 'app',
      level: config.level || 'info',
      colors: config.colors ?? true,
      timestamp: config.timestamp ?? false
    };

    this.formatter = new LogFormatter(this.config);
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level].priority >= LOG_LEVELS[this.config.level].priority;
  }

  private log(level: LogLevel, message: string, ...args: any[]): void {
    if (!this.shouldLog(level)) return;

    const formatted = this.formatter.format(level, message);
    const method = LOG_LEVELS[level].method;

    console[method](formatted, ...args);
  }

  debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  setPrefix(prefix: string): void {
    this.config.prefix = prefix;
    this.formatter = new LogFormatter(this.config);
  }

  enableColors(enable: boolean = true): void {
    this.config.colors = enable;
    this.formatter = new LogFormatter(this.config);
  }

  enableTimestamp(enable: boolean = true): void {
    this.config.timestamp = enable;
    this.formatter = new LogFormatter(this.config);
  }

  child(prefix: string): Logger {
    return new Logger({
      ...this.config,
      prefix: `${this.config.prefix}:${prefix}`
    });
  }

  getConfig(): Readonly<Required<LoggerConfig>> {
    return { ...this.config };
  }
}
