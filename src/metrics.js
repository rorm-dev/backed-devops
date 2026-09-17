// metrics.js
import client from 'prom-client';

const register = new client.Registry();
client.collectDefaultMetrics({ register }); // process CPU, memory, event loop, GC

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.3, 0.5, 1, 3, 5],
});
register.registerMetric(httpRequestDuration);

export { register, httpRequestDuration };