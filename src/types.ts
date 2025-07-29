export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LoggerConfig {
  prefix?: string;
  level?: LogLevel;
  colors?: boolean;
  timestamp?: boolean;
}

export interface LogLevelConfig {
  priority: number;
  color: string;
  method: 'log' | 'info' | 'warn' | 'error';
}
