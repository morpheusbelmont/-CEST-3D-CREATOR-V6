// =================================
// CEST 3D ENGINE
// =================================


let escena;

let camara;

let renderer;


let objetoActual;




iniciarCEST();





function iniciarCEST(){



// ESCENA


escena =

new THREE.Scene();



escena.background =

new THREE.Color(

0x08111f

);





// CÁMARA


camara =

new THREE.PerspectiveCamera(


60,


window.innerWidth /

window.innerHeight,


0.1,


1000


);



camara.position.set(

6,

5,

8

);






// RENDER


renderer =

new THREE.WebGLRenderer({

antialias:true,

preserveDrawingBuffer:true


});




renderer.setSize(

innerWidth,

innerHeight

);



renderer.shadowMap.enabled=true;



document.body.appendChild(

renderer.domElement

);






crearLuces();


crearControles();



crearGrid();





animar();



}








// =====================
// LUCES Y SOMBRAS
// =====================



function crearLuces(){



let ambiente =

new THREE.AmbientLight(

0xffffff,

0.4

);



escena.add(

ambiente

);







let sol =

new THREE.DirectionalLight(

0xffffff,

2

);



sol.position.set(

5,

10,

5

);



sol.castShadow=true;



escena.add(

sol

);






let piso =

new THREE.Mesh(

new THREE.PlaneGeometry(

30,

30

),



new THREE.ShadowMaterial({

opacity:.35

})

);



piso.rotation.x =

-Math.PI/2;



piso.receiveShadow=true;



escena.add(

piso

);



}








// =====================
// GRID + EJES
// =====================


function crearGrid(){



let grid =

new THREE.GridHelper(

20,

20,

0x00ffff,

0x333333

);



escena.add(

grid

);




let ejes =

new THREE.AxesHelper(

6

);



escena.add(

ejes

);


}









// =====================
// LOOP
// =====================


function animar(){



requestAnimationFrame(

animar

);



if(orbit)

orbit.update();




actualizarMedidas();




renderer.render(

escena,

camara

);



}
