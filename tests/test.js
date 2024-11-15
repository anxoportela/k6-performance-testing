import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

let responseTimeTrend = new Trend('response_time'); // Métrica personalizada

export const options = {
  vus: 10, // 10 usuarios virtuales
  duration: '5m', // 5 minutos
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, {
    'status was 200': (r) => r.status === 200,
  });

  // Registra el tiempo de respuesta
  responseTimeTrend.add(res.timings.duration);
}

export function handleSummary(data) {
  console.log(`Promedio de tiempo de respuesta: ${data.metrics.response_time.avg}ms`);
  return {
    'summary.json': JSON.stringify(data),
  };
}