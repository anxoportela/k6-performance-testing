import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://httpbin.org/bearer';
  const params = {
    headers: {
      Authorization: 'Bearer <your-token-here>',
    },
  };
  const res = http.get(url, params);
  check(res, {
    'status was 200': (r) => r.status === 200,
    'authenticated': (r) => r.json('authenticated') === true,
  });
}