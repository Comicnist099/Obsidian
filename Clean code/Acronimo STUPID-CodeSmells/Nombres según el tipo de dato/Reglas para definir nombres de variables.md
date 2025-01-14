*"Si una variable/función necesita un comentario para explicarla, su naming está mal hecho"*

#### Para nombrar variables debemos usar:

* Nombres pronunciables y expresivos
* Convención por lenguaje
* Nombres muy expresivos, sin ahorrarnos palabras
	* Ejemplos:
		* n *vs* numberOfUnits
		* tx *vs* tax
		* cat *vs* category
		*  ddmmyyyy *vs* birthDate
* No ponerle información técnica a los nombres

**Malos ejemplos:**
```
* class AbstractUser
* class UserMixin
* class UserImplementation
* interface UserInterface
```
* 
**Buenos ejemplos**
```
* class User
* interface User
```

	
**Nombres según el tipo de dato**
*Arreglos*
* Malo
```
* const fruit = {"manzana", ...}
```
	
* Regular
```
const fruitList = {"manzana", ...}
```
	
* Bueno
```
const fruits = {"manzana", ...}
```
	
* Mejor
```
const fruitNames = {"manzana", ...}
```

*Booleanos*
* Uso de prefijos como **is**, **can**, **has**, etc
* Evitar nombres negativos como
	* notEmpty
	* noValues
*Números*
* Usar prefijos como **max**, **min**, **total**
**Malos ejemplos**
* fruits
* cars 
	
**Buenos ejemplos**
* maxFruits
* minFruits
* totalFruits
* totalOfCars
