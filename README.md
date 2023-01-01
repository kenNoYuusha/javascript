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


## Scope

El scope es lo que define el tiempo de vida de una variable, nos ayuda a no sobreescribir el valor de la misma, en javascript tenemos 4.
- Global Scope.
como su nombre lo dice tenemos alcance global, toda variable glboal pertenece al objeto window.
- Function Scope.
alcance a nivel de funcion, var solo soporta function scope.
- Block Scope.
alcance a nivel de bloques, let y const
- Module Scope.
alcance a nivel de archivo, se requiere exportar de una parte e importar de otra.

## Closure

Es la combinacion de una declaracion y una ejecucion(funcion definida) dentro del scope de una funcion, es decir fuera del scope global.

## This 

this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

- Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
- Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
- Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.