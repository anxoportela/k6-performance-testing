<!-- omit from toc -->
# 🚀 **K6 Performance Testing with GitHub Actions**

Este proyecto utiliza **K6** para realizar pruebas de rendimiento a una API y **GitHub Actions** para automatizar su ejecución dentro de un flujo **CI/CD**. Cada vez que se realice un **push** o **pull request** en la rama principal, se ejecutarán las pruebas de rendimiento y se generarán los reportes correspondientes.

<!-- omit from toc -->
## 📋 Tabla de Contenidos

- [🚀 **Descripción**](#-descripción)
- [🔧 **Tecnologías Utilizadas**](#-tecnologías-utilizadas)
- [📂 **Estructura del Proyecto**](#-estructura-del-proyecto)
- [🏃‍♂️ **Cómo Ejecutar las Pruebas de Rendimiento**](#️-cómo-ejecutar-las-pruebas-de-rendimiento)
- [📊 **Ver Resultados**](#-ver-resultados)
- [🤝 **Contribución**](#-contribución)
- [📜 **Licencia**](#-licencia)

---

## 🚀 **Descripción**

Este proyecto tiene como objetivo realizar pruebas de rendimiento utilizando **K6** y automatizar este proceso a través de **GitHub Actions**. Las pruebas se ejecutan cada vez que se realiza un **push** o **pull request** a la rama principal del repositorio. Los resultados de las pruebas se almacenan como artefactos y se pueden analizar después.

---

## 🔧 **Tecnologías Utilizadas**

- **K6**: Herramienta de pruebas de rendimiento para APIs y sitios web.
- **GitHub Actions**: Herramienta de CI/CD que automatiza flujos de trabajo como la ejecución de pruebas de rendimiento.

---

## 📂 **Estructura del Proyecto**

La estructura del proyecto es la siguiente:

```bash
/.github
  /workflows
    performance.yml           # Configuración de GitHub Actions para ejecutar las pruebas
tests/
  test.js                     # Script con las pruebas de rendimiento con K6
LICENSE
README.md                     # Este archivo
```

- **`performance.yml`**: Configuración del flujo de trabajo de **GitHub Actions** para ejecutar las pruebas.
- **`test.js`**: Script de prueba donde se definen las solicitudes de rendimiento que **K6** ejecuta.

---

## 🏃‍♂️ **Cómo Ejecutar las Pruebas de Rendimiento**

1. **Ejecutar la prueba localmente**:

   Si deseas ejecutar las pruebas de rendimiento en tu máquina, navega al directorio del proyecto y ejecuta el siguiente comando:

   ```bash
   k6 run tests/test.js
   ```

   Esto ejecutará el archivo `test.js`, que contiene las pruebas de rendimiento definidas con **K6**.

2. **Ver los resultados**:

   Después de ejecutar el comando, **K6** te proporcionará un resumen detallado en la terminal con las métricas de las pruebas, incluyendo el tiempo de respuesta, el número de solicitudes realizadas y otros detalles importantes.

---

## 📊 **Ver Resultados**

Si estás utilizando **GitHub Actions**, los resultados de las pruebas se almacenarán como artefactos dentro de la pestaña **Actions** de tu repositorio. Puedes descargar estos artefactos para analizarlos más a fondo.

Además, si tienes configurada una integración con herramientas como **Grafana** o **Prometheus**, puedes visualizar los resultados de las pruebas de manera más gráfica.

---

## 🤝 **Contribución**

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu feature o corrección de bug (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-feature`).
5. Crea un **pull request**.

---

## 📜 **Licencia**

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
