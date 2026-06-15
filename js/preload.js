// =================================
// PRELOAD SISTEMA CEST
// =================================


let mensajes = [

"Inicializando Motor 3D...",

"Cargando geometrías básicas...",

"Activando sistema XYZ...",

"Preparando materiales...",

"Iniciando laboratorio CEST..."

];


let contador = 0;



let estado = 

document.getElementById(

"estado"

);





let proceso =

setInterval(()=>{


estado.innerHTML =

mensajes[contador];



contador++;



if(

contador >= mensajes.length

){


clearInterval(proceso);



setTimeout(()=>{


document

.getElementById(

"loader"

)

.style.display="none";





document

.getElementById(

"app"

)

.style.display="block";



},1000);


}



},900);
