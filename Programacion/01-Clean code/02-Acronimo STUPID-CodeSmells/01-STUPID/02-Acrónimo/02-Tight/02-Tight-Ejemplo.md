## **Tight Ejemplo**
1. Si hacemos una modificación en el archivo `02-high-coupling.ts`  en la clase 
`Person` haría todo un desastre en cuestión a la funcionalidad de las demás clases. Ya que las demás clases tienen un alto acoplamiento ya que heredan de la misma.
```ts
//02-high-coupling.ts
(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';
    // Alto Acoplamiento
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }

class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        name      : string,
        gender    : Gender,
        birthdate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            name,
            gender,
            birthdate
        )
    }
}
    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()
```
2. La `class User Settings` es la que más sufre ya que esta llama a todas las demás clases.
---
1. Ahora en  `02-low-coupling.ts`  si cambiamos  `interface PersonProps` solo tenemos que cambiar `class Person` porque es la única clase que necesita un cambio. y como `Person` no hereda de nada hacemos que cada clase tenga [[01-SPR-Single Responsibility Principle| El principio de responsabilidad única]] 
```ts
(()=>{
//02-low-coupling.ts
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia
    type Gender = 'M'|'F';

    interface PersonProps {
        name     : string;
        gender   : Gender;
        birthdate: Date;
    }

    class Person {
        public name     : string;
        public gender   : Gender;
        public birthdate: Date;
        
        constructor({ name, gender, birthdate }: PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
    }
    
    class User {
        public email       : string;
        public role        : string;
        private lastAccess : Date;
        
        constructor({ email, role }: UserProps ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }
    
    interface SettingsProps {
        lastFolderOpen  : string;
        workingDirectory: string;
    }
  
    class Settings {
        public workingDirectory: string;
        public lastFolderOpen  : string;
        
        constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }
    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastFolderOpen  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }
    class UserSettings {

        // constructor(
        //     public person: Person,
        //     public user  : User,
        //     public settings: Settings,
        // ){}
        public person  : Person;
        public user    : User;
        public settings: Settings;
        
        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }
    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastFolderOpen: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });
    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });

})()
```
2. Cada clase tiene su `interface` la cual ayuda mucho a que cada clase siga un lineamiento la única clase que tendría algún cambio sería `class UserSettings` debido a su alta relación con las demás clases. Uno diría que esto sería más código y antes había menor cantidad de este, lo cierto es que si es más código solo que ahora se tiene una visibilidad mejor de lo que se esta realizando y no hay un alto acoplamiento para futuros cambios.