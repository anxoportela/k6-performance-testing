### **🔍 Kata Básica: Prueba de Carga Simple**

#### 📑 Instrucciones

1. **Objetivo**: Verifica que tu servidor responde correctamente a una solicitud **GET**.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users`
3. **Pasos**:
   - Realiza una solicitud **GET** a la API pública de **JSONPlaceholder**.
   - Valida que el código de estado de la respuesta sea **200**.

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
  });
}
```

</details>
