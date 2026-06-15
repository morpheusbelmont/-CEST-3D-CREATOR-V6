// =================================
// MODO RETOS CEST
// =================================



let retos = [

{

titulo:

"Construcción básica",


descripcion:

"Crea una casa usando figuras geométricas",

puntos:100

},


{


titulo:

"Escultura digital",


descripcion:

"Crea un personaje combinando objetos",

puntos:200


},



{


titulo:

"Diseño libre 3D",


descripcion:

"Crea un objeto nuevo y aplica materiales",

puntos:300


}



];








function iniciarReto(){



let numero =

Math.floor(

Math.random()

*

retos.length

);





let reto =

retos[numero];






alert(

"🎮 RETO CEST\n\n"+


reto.titulo+

"\n\n"+

reto.descripcion+

"\n\nPuntos posibles: "+

reto.puntos



);



}
