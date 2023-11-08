// Obtener todos los elementos de encabezado
var accordions = document.querySelectorAll('.accordion');

// Agregar un controlador de eventos a cada elemento de encabezado
accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      // Alternar la clase "active" en el elemento de encabezado
      this.classList.toggle('active');
  
      // Obtener el panel relacionado
      var panel = this.nextElementSibling;
  
      // Alternar la visibilidad del panel
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });

  /*no*/