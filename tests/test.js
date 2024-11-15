import { check } from 'k6';
import http from 'k6/http';
import { Trend, Rate } from 'k6/metrics';

// Define custom metrics
let responseTimeTrend = new Trend('response_time');
let successRate = new Rate('success_rate');

export default function () {
    let res = http.get('https://jsonplaceholder.typicode.com/users');
    
    // Track response time with Trend
    responseTimeTrend.add(res.timings.duration);
    
    // Check if the response is 200 and track success rate
    let success = check(res, {
        'status is 200': (r) => r.status === 200,
    });
    successRate.add(success);
}
