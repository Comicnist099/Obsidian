## **DIP-Ejemplo**
1. La situación del momento nos presenta, que hay varios componentes que forman parte de una misma funcionalidad `05-dependency-a.ts`, `05-dependency-b.ts` y `05-dependency-c.ts` realmente todo el código funciona correctamente solo que al momento de intentar cambiar un comportamiento es necesario cambiar cada unos de los 3 procesos y el orden es laborioso.
```ts
//05-dependency-c.ts
export class LocalDataBaseService {

    constructor() {}
    
    async getFakePosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}
```
2. Esto sucede ya que `05-dependency-b.ts` depende plenamente de `05-dependency-c.ts` con la importación `import { LocalDataBaseService } from "./05-dependency-c"` y crear un elemento nuevo en este caso `LocalDataBaseService` lo que hace que si o si  tanto `05-dependency-b.ts` y `05-dependency-c.ts` tengan un [[01-Tight Coupling|alto acoplamiento]].
```ts
//05-dependency-b.ts
import { LocalDataBaseService } from "./05-dependency-c";

interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

export class PostService {
    private posts: Post[] = [];

    constructor() {}

    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();
        return this.posts;
    }
}
```
3. Esta clase llama `05-dependency-b` y la ejecuta con `const postService = new PostService();` lo que hace únicamente es ejecutar el contenido de `05-dependency-a.ts` para llamar a las otras clases
```ts
//05-dependency-a.ts
import { PostService } from './05-dependency-b';

(async () => {
    const postService = new PostService();
    const posts = await postService.getPosts();
    console.log({ posts })
})();
```
4. Esto tiene un alto acoplamiento porque si se quiere otro elemento que no sea de la clase `LocalDataBaseService` hace que se tenga que cambiar el orden total de todos los archivos.
--- 
1. La solución a esto es hacer una clase abstracta para cada tipo de solución orientada a obtener información con el objetivo de relacionar todas las clases con un solo tipo con la ayuda de `class PostProvider` para que se verifique que todos los datos corresponden a los necesarios con la ayuda de `implements`. Gracias a la implementación puedes añadir más clases y hacer que cada clase tenga solo una funcionalidad.
```ts
//05-dependency-c.ts
import localPost from "../data/local-database.json";
import { HttpClient } from "./02-open-close-c";
import { Post } from "./05-dependency-b";

export abstract class PostProvider {
  abstract getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements PostProvider {
  async getPosts() {

    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

export class JsonDtabaseService implements PostProvider {
  async getPosts() {
    return localPost;
  }
}

export class WebApiService implements PostProvider {

  constructor(private http: HttpClient) {}

  async getPosts() {
    const data = await this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data.data;
  }
}
```
2. Una de la manera para no hacer participe la clase `05-dependency-b.ts` es inyectar el elemento de la clase a `class PostService` con ayuda del constructor colocamos `constructor(private postProvider: PostProvider) {}` para hacer claro que el tipo de archivo que recibirá al momento de crear `new PostService()` sea un elemento que tenga como hijos la clase abstracta que creamos llamada `postProvider`. Esta acción hace que esta clase no tenga que ser modificada de ninguna forma ya que si o si  recibirá un elemento heredado de `postProvider` y si ese no es el caso es necesario implementar otra clase para realizar una nueva funcionalidad.
```ts
//05-dependency-b.ts
import { PostProvider } from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {}
  
  async getPosts() {
    this.posts = await this.postProvider.getPosts();
    
    return this.posts;
  }
}
```
3. Por ultimo lo único que se tiene que realizar es crear la función necesaria para la creación del tipo de clase que se hará y colocarlo en el apartado `new PostService(provider)`. ya futuramente si se quiere traer otro tipo de data solo se da de alta la clase correspondiente a utilizar y se da de alta al contructor.
```ts
//05-dependency-a.ts
import { PostService } from "./05-dependency-b";

import {
  JsonDtabaseService,
  LocalDataBaseService,
  WebApiService,
} from "./05-dependency-c";

import { HttpClient } from "./02-open-close-c";
(async () => {
  const httpClient = new HttpClient();
  const provider = new WebApiService(httpClient);
  //const provider = new LocalDataBaseService();  
  const postService = new PostService(provider);
  const posts = await postService.getPosts();
  
  console.log({ posts });
})();
```