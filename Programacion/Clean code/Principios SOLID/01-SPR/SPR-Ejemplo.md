## **SPR-Ejemplo** 
1. En esta situación tenemos una clase donde abarca ciertos comportamientos en sus funciones lo cual no es terrible solo que hay una manera de mejorarlo debido a que vemos que la clase esta haciendo muchas tareas que la están sobrecargando haciéndola menos legible.
```ts
(() => {

    interface Product { 
        id:   number;
        name: string;
    }    
    class ProductBloc {
        loadProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }    
    }

    const productBloc = new ProductBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);
})();
```
2. La solución a esto es partir la clase en varios comportamientos diferentes para que así cada cosa tenga su propia lógica, como por ejemplo  `class ProductBloc` del ejemplo anterior tenia varias funcionalidades una de ellas es enviar correos en la clase `notifyClients()` y otra es añadir elementos al carrito `onAddToCart()` , cosas que ya viene siendo algo ajeno a la idea de un `ProductBloc`.
```ts
(() => {

  interface Product {
    id: number;
    name: string;
  }
  
  class ProductService {
    getProduct(id: number) {
      console.log("Producto:", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private masterEmail: string = "marco@gmail.com";
    
    sendEmail(emailList: string[], template: "to-client" | "to-admin") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }
    
    loadProduct(id: number) {
      this.productService.getProduct(id);
    }
    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }
    notifyClients() {
      this.mailer.sendEmail(["eduardo@gmail.com"], "to-client");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    onAddToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }
  const cartBloc = new CartBloc();
  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);

})();
```
3. Así que la solución fue hacer que la función `notifyClients()` tenga su propia clase correspondiente a correos creando `class Mailer`, crear otra clase `class CartBloc` además de crear un espacio también especifico para el producto ya que `ProductBloc` ahora solo tendría la funcionalidad de llamar otros procesos con la tranquilidad que cada funcionalidad tiene su espacio de modificación sin afectar alguna otra clase, inconscientemente se uso el concepto [[OCP- Principio de abierto y cerrado]].
