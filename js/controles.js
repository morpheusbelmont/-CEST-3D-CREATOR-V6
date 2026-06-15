// =================================
// CONTROLES 3D
// =================================



let orbit;

let transform;





function crearControles(){



orbit =

new THREE.OrbitControls(

camara,

renderer.domElement

);




orbit.enableDamping=true;






transform =

new THREE.TransformControls(

camara,

renderer.domElement

);





escena.add(

transform

);





transform.addEventListener(

"dragging-changed",

function(event){



orbit.enabled =

!event.value;



}

);



}








function modo(tipo){



if(transform){



transform.setMode(

tipo

);



}



}









function seleccionarObjeto(obj){



objetoActual = obj;



transform.attach(

obj

);



}
