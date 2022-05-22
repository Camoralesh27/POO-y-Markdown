<!-- Para que Github lo interprete tiene que llamarse README. -->

<!-- HEADINGS -->
# my titulo
## Mi titulo  h2
### mi tutulo h3 
#### mi titulo h4
##### mi titulo h5 
###### mi tiutlo h6 



<!-- TEXTO EN ITALICA -->
this is an *italic* text 



<!-- TEXTOS BOLD Y STRIKETHROUGH -->
this is a **strong** tex
this is another ~~tachado~~ text
<!-- si das enter al final del renglon da un salto de linea, sino se sigue sin salto de linea -->



<!-- UL y OL -->
* apple
    * green
    * red 
    * yellow
* orange
    * amarga 
    * dulce
* etc

1. car
    1. red
    2. white
2. truck 
3. chamion



<!-- ENLACES  -->
[demoelnene.com](https://www.demoelnene.com)
<!-- tienen que estar juntos sin espacios entre corchetes   -->
[demoelnene.com](https://www.demoelnene.com "Custom title")
<!-- las entrecomillas son para que cuando dejes el cursor aparezca un texto -->



<!-- CITAS -->
> This is a quote



<!-- LÍNEAS DIVISORAS -->
--- 
<!-- guion medio -->
___ 
<!-- guion bajo -->



<!-- LINEAS DE CÓDIGO -->
`console.log("Hola mundo")`
<!-- esto es para escribir una sola linea de código -->

```javascript
class animal{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad; 
}
    dormir(){
        return `${this.nombre} está durmiendo`;
    }
```
<!-- Esto es para escribir varias líneas de código, y para que las letras aparezcan de color necesitas especificar al inicio de las comillas cual es el lenguaje que estás utilizando.-->

```html
<h1>Hello word</h1>
```


<!-- TABLAS -->
|Concepto     | Importe  | Realizado|
|-------------|----------|----------|
|HTML         | $1000    |si        |
|CSS          | $1500    |    si    |
|JS           | $2000    |no        |



<!-- IMAGENES -->
![visual studio code](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png "VSc logo")

<!-- dale click izquierdo y pon "abrir imagen en una pestaña nueva" -->
<!-- La imagen se puede guardar localmente y colocas la direccion local del png o jpg, etc -->



 <!-- GITHUB MARKDOWN -->
 * [X] Task 1
 * [X] Task 2
 * [X] Task 3
 * [X] Task 4
 * [ ] Task 5
 * [ ] Task 6
 * [ ] Task 7
 * [ ] Task 8

 <!-- con espacio en blanco para que entienda github como casilla vacia -->

 <!-- para nombrar a alguien puedes poner -->
 @camoralesh27

 <!-- y le aparecerá una notificación a la persona -->

 <!-- para poner EMOJIS escribe en el buscador "github emojis" y te va a aparecer la lista de Github -->

 :smiley:
 :joy:
 :+1:
 :ok_hand:

<!-- VScode no lo interpreta pero Github si -->