<!-- markdownlint-disable -->
### **⚙️ Kata Intermedia: Validar Tiempo de Respuesta**

#### 📑 Instrucciones

1. **Objetivo**: Mide el tiempo de respuesta de una solicitud y verifica que esté por debajo de un umbral (por ejemplo, 200 ms).
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Realiza una solicitud **GET** a la API pública.
   - Valida que el tiempo de respuesta esté por debajo de **200ms**.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, {
    'status was 200': (r) => r.status === 200,
    'response time is less than 200ms': (r) => r.timings.duration < 200,
  });
}
```

</details>
