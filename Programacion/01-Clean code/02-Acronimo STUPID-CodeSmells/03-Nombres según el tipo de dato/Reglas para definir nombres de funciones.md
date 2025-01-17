## **Reglas para definir nombres de funciones**
Deben representar acciones y ser descriptivas al respecto _"Cada función va a hacer una y solo una función, idealmente"_

#### Ejemplos
* Mal
```ts
 const createUserIfNotExists=():boolean=>{};
 const updateUserIfNotEmpty=():boolean=>{};
 const sendEmailIfFieldIsValid=():boolean=>{};
```
* Mejor
```ts
const createUser=():boolean=>{};
const updateUser=():boolean=>{}
const sendEmail=():boolean=>{}
```
### Recomendación :
```ts
interface SendEmailOptions {
	toWhom:string,
	from:string,
	body:string,
	subject:string,
	apikey:string
	}

//Mal Ejemplo
const sendEmail=(
	toWhom:string,
	from:string,
	body:string,
	subject:string,
	apikey:string)
	:boolean
	)=>{

}

//Buen Ejemplo
const sendEmail=({toWhom,from,body,subject,apikey}:sendEmailOptions):boolean=>{
}
```
---
### Otras recomendaciones
* Simplicidad es fundamental.
* Funciones de tamaño reducido. 
* Funciones de una sola línea sin causar complejidad.
* Menos de 20 líneas 
* Evitar el uso del *"else"*.
* Priorizar el uso de la condicional ternaria.
---
#### Frase 
*"Sabemos que estamos desarrollando Código limpio cuando cada función hace exactamente lo que su nombre indica"*
*-Ward Cunningham*