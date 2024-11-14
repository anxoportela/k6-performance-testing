import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10, // 10 usuarios virtuales
  duration: '10m', // 10 minutos de prueba
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
}