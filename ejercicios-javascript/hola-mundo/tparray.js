function mostrarArray(elemento, textoCustom = ""){
 document.write ('<h1>contenido del array'+ textoCustom + '</h1>');
 document.write('<ul>');
 elemento.forEach((elemento, index) =>{
    document.write('<li>'+elemento+'</li>');
 });
 document.write('</ul>');

}


//pedir 6 numeros

var numero = [];

for(var i =0; i <= 5; i++){
numero[i]=parseInt(prompt('introduce un numero', 0));
}
console.log(numero);

//mostrar el cuerpo en la pagina
mostrarArray(numero);


/*document.write('<h1>contenido de la array</h1>');
    numero.forEach((numero, index) =>{
document.write('<strong>'+numero+'</strong></br>');
    })
*/


//mostrar array en la consola
console.log(numero);

//ordenar
numero.sort(function(a, b ){return a-b});
mostrarArray(numero, ' ordenado');

//invertir elementos
numero.reverse();
mostrarArray(numero, ' invertido');

//contar elementos
document.write('<h1>EL array tiene: '+numero.length+' elementos</h1>');

//busqueda
var busqueda = parseInt(prompt('Buscar un numero', 0));
var posicion = numero.findIndex( numero=> numero == busqueda);

if(posicion && posicion !=-1){
    document.write('<hr/><h1>ENCONTRADO</H1>');
    document.write('<h1>Posicion de la busqueda: '+posicion+'</h1></hr>');

}else{
    document.write('<hr/><h1>NO ENCONTRADO</h1></hr>');

}