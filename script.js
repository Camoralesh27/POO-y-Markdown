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
    age(){ //antes "edad". No funcionaba porque el nombre del metodo era igual al nombre del atributo.
        return `${this.nombre} tiene ${this.edad} de edad.`;
    } 
}


//Ahora generamos la intancia, objeto a partir de la clase animal.
let perro = new animal("Mia",1);

//Probamos los métodos
console.log(perro.comer()); //imprimimos la función
console.log(perro.dormir());
console.log(perro.age())


//!¿Porqué no está funcionando edad? 