import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10, // 10 usuarios virtuales
  duration: '30s', // Duración de la prueba
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, {
    'status was 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
  });
}