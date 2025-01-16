## **OCP-Ejemplo**
1. En esta situación tenemos una clase la cual se encarga principalmente del comportamiento de las llamadas.
```ts
//01-HttpClient.ts

import axios from "axios";

export class HttpClient {
  async get(url: string) {
       const { data, status } = await axios.get(url);
       return { data, status };
     }

  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: resp.status };
  }
}
```
2. Esto es positivo debido a que si queremos hacer un cambio en el formato en el cual la aplicación hace llamadas [[API-REST]] se puede cambiar con facilidad su comportamiento
```ts
//

//Importamos la clase
import { HttpClient } from "./02-open-close-c";

export class TodoService {
//Inyectamos la dependencia a la clase
  constructor(private http: HttpClient) {}
  
  async getTodoItems() {
  //Utilizamos el comportamiento de la clase
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    return data;

  }
```
3. Ahora si queremos cambiar el comportamiento de llamadas de axios lo que podemos realizar es simplemente cambiar la clase `HttpClient` de esta forma
```ts
//01-HttpClient.ts

//import axios from "axios";
export class HttpClient {
//Funcion anterior
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     return { data, status };
  //   }
  async get(url: string) {
  
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: resp.status };
  }
}
```
4. La manera de comportamiento no se vera afectada en el archivo `02-TodoService.ts` debido a que solo tuvimos que modificar un elemento de la clase ya referenciada.
