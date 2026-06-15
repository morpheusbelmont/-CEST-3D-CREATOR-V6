// =================================
// CAPTURA PNG CEST
// =================================


function capturarPNG(){



renderer.render(

escena,

camara

);




let imagen =

renderer.domElement

.toDataURL(

"image/png"

);





let link =

document.createElement(

"a"

);




link.href = imagen;




link.download =

"CEST_3D_CarlosEduardo.png";



link.click();



}
