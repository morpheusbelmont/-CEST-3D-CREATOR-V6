// =================================
// IMPORTADOR GLB / GLTF CEST
// =================================



function importarModelo(event){



let archivo =

event.target.files[0];




let url =

URL.createObjectURL(

archivo

);




let loader =

new THREE.GLTFLoader();




loader.load(


url,


function(gltf){



let modelo =

gltf.scene;



modelo.scale.set(

1,

1,

1

);



modelo.traverse(

function(obj){



if(obj.isMesh){


obj.castShadow=true;


}


}

);



escena.add(

modelo

);




seleccionarObjeto(

modelo

);



}


);



}
