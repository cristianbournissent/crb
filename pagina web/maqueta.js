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
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 2',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 3',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 4',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },
    {
      title:'Prueba de titulo 5',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') +' del ' + moment().format('YYYY'),
      conent: 'Por iniciativa de Armando Ittig los primeros colores de la divisa fueron el blanco (camiseta) y el azul (pantalón), pero pronto se abandonaron para adoptar en carácter definitivo el verde y negro a rayas verticales.El Club Social y Deportivo Porvenir nace el 15 de diciembre de 1951. ​Ambos tienen vida propia hasta el 23 de agosto de 1989 en que, fusionados, se denominan con el nombre: Club Social y Deportivo Platense Porvenir. Actualmente cuenta con 11 hectáreas sobre Boulevard Lovatto.'
    },

   

  ];
 posts.forEach((item, index) => {
        var post = ` 
        <article class="post">
 <h2>${item.title}</h2>
 <br/>
 <span class="date"><h3>${item.date}</h3></span>
 <br/>
 <p>
 ${item.conent}
 </p>
 <a href="#" class="button-more">Leer mas</a>
</article>
        `;
        
        $('#posts').append(post);
 })

//login falso

$('#login form').submit(function(){
  var form_name = $('#form_name').val();
  localStorage.setItem('#for_name', form_name);

});

var form_name = localStorage.getItem('form_name');
$('#about p').html('Bienvenido,'+form_name);
});
