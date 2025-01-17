## **Reglas para definir nombres de variables**
"Si una variable/función necesita un comentario para explicarla, su naming está mal hecho"

---
### Para nombrar variables debemos usar:
* Nombres pronunciables y expresivos
* Convención por lenguaje
* Nombres muy expresivos, sin ahorrarnos palabras
	* Ejemplos:
		* n *vs* numberOfUnits
		* tx *vs* tax
		* cat *vs* category
		*  ddmmyyyy *vs* birthDate
* No ponerle información técnica a los nombres

### Clases
**Malos ejemplos:**
```ts
* class AbstractUser
* class UserMixin
* class UserImplementation
* interface UserInterface
```
* 
**Buenos ejemplos**
```ts
* class User
* interface User
```

---
### Arreglos

* Malo
```ts
* const fruit = {"manzana", ...}
```
	
* Regular
```ts
const fruitList = {"manzana", ...}
```
	
* Bueno
```ts
const fruits = {"manzana", ...}
```
	
* Mejor
```ts
const fruitNames = {"manzana", ...}
```
---
### Booleanos

* Uso de prefijos como **is**, **can**, **has**.
* Evitar nombres negativos como
#### Ejemplos
* Mal
```ts
const notEmpty=true;
const noValues=false; 
```
* Mejor
```ts
const isEmpty=true;
const hasValues=false; 
```

---
### Números
* Usar prefijos como **max**, **min**, **total**
#### Ejemplos
* Mal
```ts
const fruits=1;
const cars=1;
```
* Mejor
```ts
const maxFruits=1;
const minFruits=3;
const totalFruits=4;
const totalOfCars=5;
```
