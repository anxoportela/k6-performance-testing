<!-- markdownlint-disable -->
### **🔐 Kata de Autenticación: Solicitud con Token de Autenticación**

#### 📑 Instrucciones

1. **Objetivo**: Realiza una solicitud a una API que requiere autenticación utilizando un **token Bearer**.
2. **Endpoint**: `https://httpbin.org/bearer`
3. **Pasos**:
   - Configura el encabezado **Authorization** con un token Bearer.
   - Realiza la solicitud **GET** y valida que el token de autenticación sea correcto.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://httpbin.org/bearer';
  const params = {
    headers: {
      Authorization: 'Bearer <your-token-here>',
    },
  };
  const res = http.get(url, params);
  check(res, {
    'status was 200': (r) => r.status === 200,
    'authenticated': (r) => r.json('authenticated') === true,
  });
}
```

</details>
