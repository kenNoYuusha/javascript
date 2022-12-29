# javascript


## Que forma a un profesional?

- Conocimiento del lenguaje.
- Conocimiento de los entornos de programacion.
- Mejores practicas.
- Versado en codigo.
- Herramientas
- Etiaca / Profesionalismo
- Experiencia

### **No Fundamentos**
- Promesas(Nivel Pro)
- Getters, Setters
- Proxies
- Generadores

### **Como Funciona**
- Javascript Engine
- Herencia prototipal
- Event loop

### **Mejores practicas**
- No reinventamos la rueda
    - usamos codigo de terceros
    - aplicamos patrones de diseño
- Probamos nuestro codigo

### **Etica**
- Ser responsable
- Entregar a tiempo
- Saber decir que no
- No hacer daño


-----------------
## Como llega un Script al navegador

Cuando el navegador procesa el html, transforma las etiquetas en una estructura de arbol, lo que conocemos como DOM.

El navegador empieza a cargar los nodos en orden, y si hay una etiqueta script de por medio, se detendra la carga del dom hasta que el contenido de esta etiqueta script termine su ejecucion.
Por eso es recomendable colocar las etiquetas script al final antes que se cierre el body.

No obstante exiten 2 atributos que ayudan en caso el script se coloque en medio de la carga del DOM.

- Async: 
Para scripts externos, el fetching ocurre en segundo plano y no detiene la carga del DOM, al momento de cargar el script si detiene la carga del DOM.
- Defer: 
A diferencia de async, el fetch tambien ocurre en segundo plano y no detiene la ejecucion del DOM, pero el script se ejecuta al momento que el DOM termina de cargar.


