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
import http from 'k6/http';
import { check, Trend } from 'k6';

let responseTimeTrend = new Trend('response_time'); // Métrica personalizada

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
```

</details>
