# @taviox/logs

**A flexible typescript logging library built specifically for my app and other Node.js applications**. Created using Typescript and **no** other dependency.

- [Installation](#installation)
- [Usage | Output](#usage)
- [Customizing Logs](#customizing-logs)
- [Child Loggers](#child-loggers)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

### Installation
```
bun add @taviox/logs
```

### Usage

```ts
import { info, error, warn, debug } from "@taviox/logs";

info("database seeded!");
error("error while fetching products.");
warn("this is a warning message!");
debug("debug info");
```

#### Output

```
app:info: database seeded!
app:error: error while fetching products
app:warn: this is a warning message
app:debug debug info
```

#### Customizing Logs

To change things like the prefix (app:), or the logs level, use the function **createLogger** from `@taviox/logs`:

```ts
import { createLogger } from '@taviox/logs';

const logger = createLogger({
  prefix: 'api',
  level: 'debug',
  colors: true,
  timestamp: true
});

logger.info('API server started');
logger.error('Request failed');
```

#### Child Loggers

If you opt for creating a hierarchical logging structure, follow the example below:

```ts
import { createLogger } from '@taviox/logs';

const appLogger = createLogger({ prefix: 'app' });
const dbLogger = appLogger.child('database');
const authLogger = appLogger.child('auth');

dbLogger.info('Connected to PostgreSQL');     // app:database:info: Connected to PostgreSQL
authLogger.warn('Token expires in 5 minutes'); // app:auth:warn: Token expires in 5 minutes
```

The expected output is:
```bash
❯ bun run test.ts
app:database:info: Connected to PostgreSQL
app:auth:warn: Token expires in 5 minutes
```

## Configuration

### LoggerConfig Options

```typescript
interface LoggerConfig {
  prefix?: string;      // Default: 'app'
  level?: LogLevel;     // Default: 'info'
  colors?: boolean;     // Default: true
  timestamp?: boolean;  // Default: false
}
```

### Log Levels

Available log levels in order of priority:

| Level   | Priority | Color  | When to use |
|---------|----------|--------|-------------|
| `debug` | 0        | cyan   | Development debugging |
| `info`  | 1        | green  | General information |
| `warn`  | 2        | yellow | Warnings and deprecations |
| `error` | 3        | red    | Errors and exceptions |


### Extra Configuration
If you prefer, for any reason, to use a dynamic-like configuration, follow along:

```typescript
const logger = new Logger({ prefix: 'app' });

logger.setLevel('debug');
logger.setPrefix('new-service');
logger.enableColors(false);
logger.enableTimestamp(true);

const config = logger.getConfig();
console.log(config.level);
```

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'feat(filename): amazing feature'
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License
MIT © Taviox (PowerzinBR on GitHub)
