<!-- markdownlint-disable -->
### **📊 Kata Avanzada: Medir el Rendimiento con Métricas Personalizadas**

#### 📑 Instrucciones

1. **Objetivo**: Mide métricas personalizadas como el tiempo de respuesta promedio y muestra el resultado en el reporte.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Realiza varias solicitudes **GET** a la API.
   - Registra y muestra el tiempo de respuesta promedio en el reporte.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
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

```

</details>
