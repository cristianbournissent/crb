$(document).ready(function(){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1000,
     responsive: true,
    });
  
  
  //POST
  var posts=[
    {
      title:'Prueba de titulo 1',
      datte: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 2',
      datte: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 3',
      datte: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 4',
      datte: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 5',
      datte: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },

   

  ];
  console.log(posts);
});
