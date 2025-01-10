# Documentación del Proyecto ProvinciaSeguros

Este documento describe los pasos para instalar y ejecutar el proyecto ProvinciaSeguros localmente.

## Descripción del Proyecto

ProvinciaSeguros- es una aplicación web desarrollada para Provincia Seguros que ofrece a los usuarios la posibilidad de registrarse y acceder a un área privada con contenido exclusivo. La aplicación proporciona acceso a distintas páginas y funcionalidades una vez que el usuario se ha autenticado.

## Tecnologías y Dependencias

Este proyecto utiliza las siguientes tecnologías y dependencias:

- **Vite:** Entorno de desarrollo y construcción extremadamente rápido para aplicaciones web modernas.
- **Vue.js 3:** Framework progresivo de JavaScript para la construcción de interfaces de usuario.
- **Vue Router:** Librería para la gestión de la navegación entre las diferentes vistas de la aplicación.
- **Vuetify:** Framework de componentes UI basado en Material Design para Vue.js. Se utiliza para la creación de componentes como carouseles y otros elementos de la interfaz.
- **Pinia:** Librería de gestión de estado para Vue.js, utilizada en este proyecto para el manejo del estado global de la aplicación, específicamente para la gestión del inicio de sesión.
- **Axios:** Cliente HTTP basado en promesas para realizar peticiones a APIs externas.
- **Vuelidate:** Librería para la validación de formularios en Vue.js, utilizada para validar los datos ingresados durante el registro de usuarios.
- **@mdi/font:** Conjunto de iconos Material Design Icons.

## Notas Adicionales

Se utiliza el LocalStorage del navegador para almacenar temporalmente los datos del usuario durante la sesión. Es importante tener en cuenta que los datos almacenados en LocalStorage se pierden al cerrar el navegador.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js y npm (o yarn):** Puedes descargar Node.js desde [nodejs.org](nodejs.org). npm se incluye con la instalación de Node.js. Si prefieres usar yarn, puedes instalarlo globalmente con `npm install -g yarn`.

## Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

### Opción 1: Clonar con Git (Recomendado)

Esta es la forma recomendada, ya que facilita las actualizaciones y el manejo de versiones.

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/pciruelos/provinciaseguros.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd provinciaseguros
    ```

    Ejemplo:

    ```bash
    cd provinciaseguros
    ```

3.  **Instala las dependencias:**

    Usa `npm` o `yarn` según tu preferencia.

    - **Con npm:**

      ```bash
      npm install
      ```

    - **Con yarn:**

      ```bash
      yarn install
      ```

### Opción 2: Descargar el ZIP (Sin Git)

Si no tienes Git instalado o prefieres no usarlo, puedes descargar el proyecto como un archivo ZIP.

1.  **Descarga el ZIP:**

    - Ve a la página del repositorio en https://github.com/pciruelos/provinciaseguros.git
    - Busca el botón "Code" (o similar) y selecciona "Download ZIP".

2.  **Extrae el ZIP:**

    - Descomprime el archivo ZIP en la ubicación que desees.

3.  **Abre una terminal en la carpeta extraída:**

    - Navega a la carpeta donde extrajiste el ZIP usando tu explorador de archivos.
    - Abre una terminal o línea de comandos en esa carpeta.

4.  **Instala las dependencias:**

    Usa `npm` o `yarn` según tu preferencia (los mismos comandos que en la opción 1).

### Pasos para la Ejecución (Para ambas opciones)

Una vez instaladas las dependencias, puedes ejecutar la aplicación en modo de desarrollo con el siguiente comando:

- **Con npm:**

  ```bash
  npm run dev
  ```

- **Con yarn:**

  ```bash
  yarn dev
  ```

Este comando iniciará el servidor de desarrollo. Luego, puedes abrir [http://localhost:5000/] (o el puerto que se indique en la consola) con tu navegador para ver el resultado.
