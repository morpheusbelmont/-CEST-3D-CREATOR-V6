// =====================================
// SISTEMA DE MATERIALES CEST
// =====================================



function crearMaterial(){



let color =

document.getElementById(

"color"

).value;




return new THREE.MeshStandardMaterial({



color:

new THREE.Color(

color

),




metalness:.2,

roughness:.3,

transparent:true,

opacity:.9




});



}









// CAMBIO DE COLOR EN TIEMPO REAL


document.addEventListener(

"input",

function(e){



if(

e.target.id=="color"

&&

objetoActual

){



objetoActual.traverse(

function(parte){



if(

parte.material

){



parte.material.color.set(

e.target.value

);



}



}

);



}



}

);
