// =================================
// SISTEMA DE MEDICIÓN CEST
// =================================


function actualizarMedidas(){


if(!objetoActual){

return;

}



let caja = new THREE.Box3()

.setFromObject(

objetoActual

);



let tamaño =

new THREE.Vector3();



caja.getSize(

tamaño

);




// Conversión educativa

let xCM =

(tamaño.x * 10)

.toFixed(1);



let yCM =

(tamaño.y * 10)

.toFixed(1);



let zCM =

(tamaño.z * 10)

.toFixed(1);





document.getElementById(

"medidas"

).innerHTML =

`

<hr>

📐 MEDIDAS

<br><br>


X Ancho:

${xCM} cm /

${xCM*10} px


<br>



Y Alto:

${yCM} cm /

${yCM*10} px


<br>



Z Profundidad:

${zCM} cm /

${zCM*10} px

`;



}
