class animal{
    //inicializo los atributos (también propiedades. Características de los objetos)
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    //métodos ó funcionalidades ¿Qué es lo qué hace, ladra, brinca, baila? 
    dormir(){
        return `${this.nombre} está durmiendo`; 
    }
    comer(){
        return `${this.nombre} está comiendo`;
    }

    //!¿Porqué no está funcionando "edad()"? 
    age(){ //antes "edad". No funcionaba porque el nombre del metodo era igual al nombre del atributo.
        return `${this.nombre} tiene ${this.edad} de edad.`;
    } 

    volar(){
        return `${this.nombre} está volando.`
    }
}


//Ahora generamos la intancia, objeto a partir de la clase animal.
let perro = new animal("Mia",1); 

//Probamos los métodos imprimiendo sus valores.
console.log(perro.comer()); 
console.log(perro.dormir());
console.log(perro.age())
console.log(perro.volar());

//¿Cómo poner la tílde invertida? Alt + 96 

// Los atajos de caracteres los puedes encontrar en "elcodigoascii.com.ar"