// =====================================
// BIBLIOTECA DE OBJETOS CEST
// =====================================



function crearSeleccion(){


let tipo =

document.getElementById(

"figura"

).value;



crearObjeto(tipo);


}








function crearObjeto(tipo){



let objeto;





// =====================
// MATERIAL
// =====================


let mat =

crearMaterial();







// CUBO


if(tipo=="cubo"){



objeto =

new THREE.Mesh(

new THREE.BoxGeometry(

2,2,2

),

mat

);



}








// ESFERA



if(tipo=="esfera"){



objeto =

new THREE.Mesh(

new THREE.SphereGeometry(

1.3,

32,

32

),

mat

);



}









// PIRÁMIDE



if(tipo=="piramide"){



objeto =

new THREE.Mesh(

new THREE.ConeGeometry(

1.5,

2,

4

),

mat

);



}








// PRISMA TRIANGULAR


if(tipo=="prisma"){



objeto =

new THREE.Mesh(

new THREE.CylinderGeometry(

1.4,

1.4,

2,

3

),

mat

);



}










// =====================
// VASO
// =====================


if(tipo=="vaso"){



objeto =

new THREE.Group();




let cuerpo =

new THREE.Mesh(

new THREE.CylinderGeometry(

1,

.7,

2,

32

),

mat

);



let hueco =

new THREE.Mesh(

new THREE.CylinderGeometry(

.8,

.5,

1.8,

32

),

new THREE.MeshBasicMaterial({

color:0x111111

})

);



hueco.position.y=.15;




objeto.add(cuerpo);

objeto.add(hueco);



}









// =====================
// CASA
// =====================


if(tipo=="casa"){



objeto =

new THREE.Group();




// base


let base =

new THREE.Mesh(

new THREE.BoxGeometry(

2,

2,

2

),

mat

);





// techo


let techo =

new THREE.Mesh(

new THREE.ConeGeometry(

1.8,

1,

4

),

mat

);



techo.position.y=1.5;



objeto.add(base);

objeto.add(techo);



}









// =====================
// ESTRELLA 3D
// =====================



if(tipo=="estrella"){



let forma =

new THREE.Shape();




for(

let i=0;

i<10;

i++

){



let radio =

i%2==0 ?

1.5 :

.7;




let angulo =

i*Math.PI/5;



let x =

Math.cos(angulo)

*radio;



let y =

Math.sin(angulo)

*radio;




if(i==0)


forma.moveTo(

x,

y

);


else


forma.lineTo(

x,

y

);


}



forma.closePath();





let geo =

new THREE.ExtrudeGeometry(

forma,

{

depth:.5,

bevelEnabled:true

}

);



objeto =

new THREE.Mesh(

geo,

mat

);



}









// =====================
// ESFINGE EDUCATIVA
// =====================



if(tipo=="esfinge"){



objeto =

new THREE.Group();





let cabeza =

new THREE.Mesh(

new THREE.SphereGeometry(

1,

32,

32

),

mat

);



cabeza.scale.y=1.3;





let corona =

new THREE.Mesh(

new THREE.BoxGeometry(

2.4,

.4,

.5

),

mat

);



corona.position.y=1;




objeto.add(cabeza);

objeto.add(corona);



}







// ACTIVAR SOMBRAS



objeto.traverse(

function(hijo){



if(hijo.isMesh){



hijo.castShadow=true;

hijo.receiveShadow=true;



}



}

);








// AGREGAR ESCENA


escena.add(

objeto

);





seleccionarObjeto(

objeto

);



}
