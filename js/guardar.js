// =================================
// GUARDAR PROYECTO CEST
// =================================


function guardarProyecto(){


let proyecto = [];


escena.children.forEach(

obj =>{


if(

obj.type=="Mesh"

||

obj.type=="Group"

){



proyecto.push({



tipo: obj.type,



posicion:{


x:obj.position.x,

y:obj.position.y,

z:obj.position.z


},



escala:{


x:obj.scale.x,

y:obj.scale.y,

z:obj.scale.z


},



rotacion:{


x:obj.rotation.x,

y:obj.rotation.y,

z:obj.rotation.z


}



});



}



}

);






let archivo =

new Blob(

[

JSON.stringify(

proyecto,

null,

2

)

],

{

type:"application/json"

}

);





let link =

document.createElement(

"a"

);



link.href =

URL.createObjectURL(

archivo

);



link.download =

"Proyecto_CEST_3D.json";



link.click();



}
