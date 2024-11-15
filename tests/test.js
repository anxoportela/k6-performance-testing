import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users/1');
  check(res, {
    'status was 200': (r) => r.status === 200,
    'user name is Leanne Graham': (r) => r.json('name') === 'Leanne Graham',
  });
}