const iteracionesMaximas = 12;
const texto = 'soy tan pro que voy a resolVer esto re facil.';
const texto2= 'no se cumpla'


for(let numerodeiteracion = 1; numerodeiteracion <= iteracionesMaximas; numerodeiteracion++){
    console.log(''+numerodeiteracion);

   // debugger;

   if (numerodeiteracion != iteracionesMaximas){
    //ejecuta esto
        console.log(texto2);
    }else {
        console.log(texto.toLocaleLowerCase());
    }
}