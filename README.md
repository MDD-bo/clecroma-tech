# Proyecto: Aplicación web para servicios técnicos de computadoras

## 1. Problema identificado

Las personas buscan a una persona especializada que ofrezca servicios de:

* Soporte técnico
* Mantenimiento preventivo
* Mantenimiento correctivo

para sus computadoras.

El problema central es la necesidad de contar con una **aplicación web** que permita ofrecer estos servicios de forma organizada, accesible y fácil de usar.

---

## 2. Propuesta de solución

Se propone desarrollar una **aplicación web tipo SPA (Single Page Application)** que permita:

* Presentar los servicios técnicos disponibles.
* Brindar información útil sobre mantenimiento de computadoras.
* Permitir que los usuarios soliciten soporte técnico.
* Ofrecer una experiencia rápida y moderna mediante navegación sin recarga completa de la página.

---

## 3. Tecnologías y enfoque de desarrollo

### 3.1 Tecnología principal

* **Angular**

### 3.2 Tipo de aplicación

* **SPA (Single Page Application)**

### 3.3 Renderizado

* **CSR (Client-Side Rendering)**

### 3.4 Despliegue

* **Servidor estático**

### 3.5 Justificación técnica

La aplicación funcionará como una SPA porque el contenido se renderiza del lado del cliente, lo que permite una navegación fluida y una estructura modular. El uso de un servidor estático es adecuado porque la aplicación será principalmente frontend y no requerirá procesamiento complejo del lado del servidor para su primera versión.

---

## 4. Alcance del proyecto

### 4.1 Alcance general

El proyecto consiste en el diseño y desarrollo de una aplicación web orientada a ofrecer servicios técnicos para computadoras, permitiendo a los usuarios consultar información sobre soporte técnico, mantenimiento preventivo y correctivo, así como solicitar atención de manera sencilla.

### 4.2 Alcance funcional

La aplicación incluirá:

* Página de inicio
* Sección de servicios técnicos
* Formulario de contacto o solicitud de soporte
* Sección de recomendaciones para el cuidado de computadoras
* Navegación entre secciones mediante rutas SPA
* Diseño responsivo para distintos dispositivos

### 4.3 Alcance técnico

* Desarrollo con Angular
* Arquitectura SPA
* Renderizado del lado del cliente
* Despliegue en servidor estático
* Interfaz modular y mantenible

### 4.4 Fuera del alcance

No se incluirá en la primera versión:

* Sistema de pagos en línea
* Panel administrativo complejo
* Gestión avanzada de inventario
* Aplicación móvil nativa
* Inteligencia artificial para diagnóstico automático
* Integraciones avanzadas con sistemas externos

---

## 5. Objetivos del proyecto

### 5.1 Objetivo general

**Desarrollar una aplicación web SPA, basada en Angular y renderizada del lado del cliente, que permita a los usuarios acceder de manera sencilla a servicios de soporte técnico, mantenimiento preventivo y correctivo para computadoras, facilitando la solicitud de atención y la consulta de información técnica.**

### 5.2 Objetivos específicos

1. Diseñar una interfaz responsiva, intuitiva y fácil de usar.
2. Implementar módulos funcionales para visualizar los servicios técnicos ofrecidos.
3. Desarrollar un formulario de contacto o solicitud de soporte.
4. Organizar información técnica sobre mantenimiento preventivo y correctivo.
5. Integrar la aplicación con una arquitectura SPA usando Angular.
6. Desplegar la aplicación en un servidor estático.
7. Validar el funcionamiento mediante pruebas de navegación, usabilidad y compatibilidad.

---

## 6. Requisitos del sistema

### 6.1 Requisitos funcionales

#### 6.1.1 Gestión de información de servicios

* El sistema debe mostrar los servicios técnicos disponibles.
* El sistema debe permitir consultar una descripción breve de cada servicio.
* El sistema debe organizar los servicios en secciones accesibles.

#### 6.1.2 Navegación

* El sistema debe permitir navegar entre secciones sin recargar la página completa.
* El sistema debe contar con rutas para inicio, servicios, contacto y recomendaciones.
* El sistema debe ofrecer acceso rápido desde el menú principal.

#### 6.1.3 Solicitud de soporte

* El sistema debe permitir completar un formulario de contacto o solicitud.
* El formulario debe solicitar, como mínimo:

  * Nombre
  * Correo electrónico
  * Número de teléfono
  * Descripción del problema
  * Tipo de servicio requerido
* El sistema debe validar campos obligatorios.
* El sistema debe registrar o enviar la información ingresada.

#### 6.1.4 Recomendaciones técnicas

* El sistema debe mostrar recomendaciones básicas para el cuidado de computadoras.
* El sistema debe permitir consultar consejos de mantenimiento preventivo.
* El sistema debe organizar la información en un formato fácil de leer.

#### 6.1.5 Interacción con el usuario

* El sistema debe mostrar mensajes de confirmación al completar una solicitud.
* El sistema debe notificar errores en formularios o envío de datos.
* El sistema debe ofrecer una experiencia clara e intuitiva.

---

### 6.2 Requisitos no funcionales

#### 6.2.1 Usabilidad

* La aplicación debe ser fácil de usar.
* La interfaz debe presentar información clara y ordenada.
* La navegación debe ser visible y sencilla.

#### 6.2.2 Rendimiento

* La aplicación debe cargar en un tiempo razonable.
* La navegación debe ser rápida y sin recarga completa.
* El sistema debe responder de forma fluida.

#### 6.2.3 Compatibilidad

* La aplicación debe funcionar en navegadores modernos.
* La interfaz debe adaptarse a diferentes resoluciones.
* Debe ser compatible con escritorio, tabletas y teléfonos móviles.

#### 6.2.4 Disponibilidad

* La aplicación debe estar disponible en un servidor estático.
* La solución debe poder desplegarse sin infraestructura compleja.

#### 6.2.5 Mantenibilidad

* El código debe estar organizado en componentes reutilizables.
* La estructura debe facilitar futuras modificaciones.
* La separación de responsabilidades debe simplificar el mantenimiento.

#### 6.2.6 Seguridad básica

* El sistema debe validar datos de formularios.
* La aplicación debe proteger la integridad de la información.
* No debe exponer datos sensibles innecesarios.

#### 6.2.7 Portabilidad

* La aplicación debe poder desplegarse en distintos servidores estáticos.
* Debe publicarse sin cambios mayores en producción.

#### 6.2.8 Escalabilidad

* La arquitectura debe permitir agregar nuevos módulos en el futuro.
* El sistema debe crecer funcionalmente sin reescritura total.

---

## 7. Estructuración y planificación del alcance

### 7.1 Planificación del alcance

La planificación del alcance define qué incluye el proyecto, qué no incluye y cómo se organizarán sus entregables. Esto permite controlar el desarrollo y evitar desviaciones.

### 7.2 Línea base del alcance

La línea base del alcance está compuesta por:

1. **Enunciado del alcance**
2. **EDT (Estructura de Desglose de Trabajo)**
3. **Diccionario de la EDT**

---

## 8. Estructura de Desglose de Trabajo (EDT)

### 8.1 Gestión del proyecto

* Definición del problema
* Recolección de requisitos
* Definición del alcance
* Planificación del trabajo
* Seguimiento y control

### 8.2 Análisis y diseño

* Análisis de necesidades del usuario
* Definición de casos de uso
* Diseño de arquitectura SPA
* Diseño de navegación y rutas
* Prototipo de interfaz

### 8.3 Desarrollo frontend

* Configuración del proyecto Angular
* Creación de componentes reutilizables
* Implementación de la página principal
* Implementación del módulo de servicios
* Implementación del formulario de contacto
* Implementación del módulo de recomendaciones
* Integración de rutas y navegación

### 8.4 Pruebas

* Pruebas de navegación
* Pruebas de visualización responsiva
* Pruebas de funcionamiento del formulario
* Corrección de errores
* Validación final

### 8.5 Despliegue

* Generación de versión de producción
* Configuración del servidor estático
* Publicación de la aplicación
* Verificación del despliegue

### 8.6 Documentación

* Manual técnico
* Manual de usuario
* Documentación de alcance
* Documentación de pruebas
* Cierre del proyecto

---

## 9. Línea base del alcance

### 9.1 Enunciado base

**Desarrollar una aplicación web SPA con Angular, orientada a brindar información y solicitud de servicios de soporte técnico, mantenimiento preventivo y correctivo para computadoras, desplegada en un servidor estático y diseñada con una interfaz responsiva y fácil de usar.**

### 9.2 Entregables base

* Aplicación web funcional
* Secciones informativas sobre servicios
* Formulario de contacto
* Navegación SPA
* Despliegue en servidor estático
* Documentación técnica y de usuario

### 9.3 Criterios de aceptación

* La aplicación debe cargar correctamente en el navegador.
* Las rutas internas deben funcionar sin recargar toda la página.
* El formulario debe registrar correctamente la información.
* La interfaz debe adaptarse a distintos tamaños de pantalla.
* El despliegue debe ser accesible desde el servidor definido.

---

## 10. Mínimo Producto Viable (MVP)

### 10.1 Definición

El MVP es la primera versión funcional mínima del sistema, suficiente para validar la idea del proyecto con el menor esfuerzo y tiempo posibles.

### 10.2 Funcionalidades esenciales del MVP

1. **Página de inicio**

   * Presentación general del servicio.
   * Breve descripción del propósito de la aplicación.

2. **Sección de servicios**

   * Visualización de:

     * Soporte técnico
     * Mantenimiento preventivo
     * Mantenimiento correctivo

3. **Formulario de solicitud de soporte**

   * Nombre
   * Correo electrónico
   * Número de teléfono
   * Descripción del problema
   * Validación mínima de campos obligatorios

4. **Navegación básica SPA**

   * Acceso entre inicio, servicios y contacto sin recarga completa.

5. **Diseño responsivo básico**

   * Visualización correcta en computadora y móviles.

### 10.3 Funcionalidades que pueden dejarse para después

* Panel administrativo
* Historial de solicitudes
* Chat en tiempo real
* Autenticación de usuarios
* Pago en línea
* Diagnóstico automático
* Notificaciones por correo o SMS

### 10.4 Descripción formal del MVP

**El mínimo producto viable del proyecto consiste en una aplicación web SPA desarrollada con Angular que permita presentar los servicios técnicos de computadoras y registrar solicitudes básicas de soporte mediante un formulario de contacto. Su objetivo es validar la utilidad de la solución mediante una interfaz funcional, sencilla y responsiva, sin incorporar por el momento módulos avanzados de administración, autenticación o automatización.**

---

## 11. Redacción resumen para informe

**El proyecto tiene como propósito desarrollar una aplicación web SPA con Angular para brindar servicios técnicos relacionados con computadoras. El sistema permitirá mostrar información sobre soporte técnico, mantenimiento preventivo y correctivo, además de facilitar la solicitud de atención mediante un formulario de contacto. La planificación del alcance incluye el objetivo general, objetivos específicos, requisitos funcionales y no funcionales, la EDT, la línea base del alcance y la definición del MVP como una primera versión funcional mínima.**



# Clecroma

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
