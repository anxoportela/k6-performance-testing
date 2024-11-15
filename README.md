### **📈 Kata Completa: Test de Carga Completa y Reportes de Resultados**

#### 📑 Instrucciones

1. **Objetivo**: Realiza un **test de carga** con múltiples usuarios y genera un reporte de resultados, incluyendo métricas avanzadas.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Configura **10 usuarios virtuales** para realizar solicitudes durante **5 minutos**.
   - Mide el rendimiento y genera un reporte del

 tiempo de respuesta promedio.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
import http from 'k6/http';
import { check, Trend } from 'k6';

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
```

</details>
