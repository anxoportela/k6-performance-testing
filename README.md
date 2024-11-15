<!-- markdownlint-disable -->
### **🚀 Kata Avanzada: Cargar Múltiples Usuarios en Paralelo**

#### 📑 Instrucciones

1. **Objetivo**: Simula un escenario donde múltiples usuarios realizan solicitudes **GET** a la misma API en paralelo.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Usa **`vus`** (usuarios virtuales) para realizar múltiples solicitudes en paralelo.
   - Configura **10 usuarios virtuales** y realiza la prueba durante **30 segundos**.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
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
```

</details>
