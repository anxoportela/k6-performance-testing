### **🔄 Kata de Petición con Datos Dinámicos: Validar Respuesta con Datos Variables**

#### 📑 Instrucciones

1. **Objetivo**: Realiza una solicitud **GET** y valida que los datos devueltos coincidan con los datos esperados.
2. **Endpoint**: `https://jsonplaceholder.typicode.com/users/1`
3. **Pasos**:
   - Realiza una solicitud para obtener un usuario específico.
   - Verifica que los datos del usuario sean correctos, como el nombre **"Leanne Graham"**.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users/1');
  check(res, {
    'status was 200': (r) => r.status === 200,
    'user name is Leanne Graham': (r) => r.json('name') === 'Leanne Graham',
  });
}
```

</details>
