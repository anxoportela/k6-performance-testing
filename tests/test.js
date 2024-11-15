import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
  check(res, {
    'status was 404': (r) => r.status === 404,
  });
}