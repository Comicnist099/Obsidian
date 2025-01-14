#### Reglas generales
Deben representar acciones y ser descriptivas al respecto _"Cada función va a hacer una y solo una función, idealmente"_

**Malos ejemplos**
* createUserIfNotExists()
* updateUserIfNotEmpty()
* sendEmailIfFieldIsValid()

**Buenos ejemplos**
* createUser()
* updateUser()
* sendEmail()



#### Recomendación :


```
interface SendEmailOptions {
	toWhom:string,
	from:string,
	body:string,
	subject:string,
	apikey:string
	}

//Mal Ejemplo
funcion sendEmail(
	toWhom:string,
	from:string,
	body:string,
	subject:string,
	apikey:string)
	:boolean{

}

//Buen Ejemplo
function sendEmail({toWhom,from,body,subject,apikey}:sendEmailOptions):boolean{
}
```
#### Otras recomendaciones

* Simplicidad es fundamental.
* Funciones de tamaño reducido. 
* Funciones de una sola línea sin causar complejidad.
* Menos de 20 líneas 
* Evitar el uso del *"else"*.
* Priorizar el uso de la condicional ternaria.

#### Frase 
*"Sabemos que estamos desarrollando Código limpio cuando cada función hace exactamente lo que su nombre indica"*
*-Ward Cunningham*