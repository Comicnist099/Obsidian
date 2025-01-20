## **Singleton Ejemplo**
1. Aquí tenemos un ejemplo de singleton como se puede ver su propósito funciona y no hay problema alguno, la cosa es que al momento de realizar una función de este estilo se pierde la legibilidad del código y simplicidad.
2. Tenemos la falta en encapsulación adecuada en la creación de la instancia la función `createInstance` crea un objeto simple sin lógica adicional.
```js
const Singleton = (function () {
    let instance;
    function createInstance() {
        return new Object('I am the instance');
    }
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    console.log('Misma instancia? ', (instance1 === instance2));
}

main();
```
3. Los singleton no son primordiales en gran cantidad de casos así que si antes de realizar uno es necesario establecer la importancia de estos ya que generan un [[01-Tight Coupling|alto acoplamiento]]. Como por ejemplo:
```js
// instance.js
export function createInstance() {
    return { data: 'I am the instance' };
}

// main.js
import { createInstance } from './instance.js';

function someFunction(instance) {
    console.log(instance.data);
}

const instance = createInstance();
someFunction(instance);

```
4. Esta representación hace la misma funcionalidad de el anterior singleton pero lo hace más legible, haciendo una inyección de dependencias la desventaja, sin embargo debido su funcionalidad dependiendo del tipo de caso puede llegar ser limitada así que es necesario primero establecer si realmente es necesaria cualquier tipo de implementación.