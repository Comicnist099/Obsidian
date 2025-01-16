## **LSP-Ejemplo**
1. En esta situación tenemos dos archivos uno se encarga de ejecutar elementos de una clase y el otro se encarga de ser la clase.
```ts
//03-liskov-a.ts
import { Tesla, Audi, Toyota, Honda } from './03-liskov-b';

(() => {    
    const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {
        
        for (const car of cars) {     
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfTeslaSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfAudiSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }         
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];
    printCarSeats( cars );

})();
```
2. En el segundo archivo es decir el `03-liskov-b.ts` se encuentran varias clases con el nombre de varios vehículos, dirás porque no realizar una clase general para cada auto, bueno realmente no es una mala idea solo que en este caso en concreto tiene sentido que cada auto tenga su clase debido a que cada auto puede componerse de valores únicos
```ts
//03-liskov-b.ts
export class Tesla {
    constructor( private numberOfSeats: number ) {}
    
    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }
}
export class Audi {
    constructor( private numberOfSeats: number ) {}

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }
}
export class Toyota {
    constructor( private numberOfSeats: number ) {}

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }
}

export class Honda {
    constructor( private numberOfSeats: number ) {}

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }
}
```