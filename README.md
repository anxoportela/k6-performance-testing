<!-- markdownlint-disable -->
### **💥 Kata de Error Handling: Manejo de Respuestas de Error 404**

#### 📑 Instrucciones

1. **Objetivo**: Simula un error 404 al solicitar un recurso que no existe y maneja la respuesta adecuadamente.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/invalid-endpoint`
3. **Pasos**:
   - Realiza una solicitud **GET** a un endpoint no válido.
   - Verifica que el código de estado sea **404**.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
  check(res, {
    'status was 404': (r) => r.status === 404,
  });
}
```

</details>
