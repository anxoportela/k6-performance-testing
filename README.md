### **💡 Kata de Stress: Test de Larga Duración**

#### 📑 Instrucciones

1. **Objetivo**: Simula una carga continua durante un tiempo prolongado para verificar el rendimiento y estabilidad del servidor.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Ejecuta un **stress test** con **10 usuarios virtuales** durante **10 minutos**.
   - Verifica que el servidor siga respondiendo correctamente.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
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
```

</details>
