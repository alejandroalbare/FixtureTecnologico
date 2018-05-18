$("#b1").click(function() {
  $(this).toggleClass("changeColor");
  $("#b2").removeClass("changeColor");
  $("#b3").removeClass("changeColor");

  $("#s1").toggleClass("changeColor");
  $("#s2").removeClass("changeColor");
  $("#s3").removeClass("changeColor");
  $("html, body").animate({
    scrollTop: $('body').offset().top
  }, 1000);
});

$("#b2").click(function() {
  $(this).toggleClass("changeColor");
  $("#b1").removeClass("changeColor");
  $("#b3").removeClass("changeColor");

  $("#s2").toggleClass("changeColor");
  $("#s1").removeClass("changeColor");
  $("#s3").removeClass("changeColor");
  $("html, body").animate({
    scrollTop: $('#grupos').offset().top
  }, 1000);
});

$("#b3").click(function() {
  $(this).toggleClass("changeColor");
  $("#b1").removeClass("changeColor");
  $("#b2").removeClass("changeColor");

  $("#s3").toggleClass("changeColor");
  $("#s1").removeClass("changeColor");
  $("#s2").removeClass("changeColor");
  $("html, body").animate({
    scrollTop: $('#enfrentamientos').offset().top
  }, 1000);
});

function vaciarDiv(){
  for(var i = 0; i < 9; i++){
    $("#nuevoDiv"+i).remove(); // Borra todos los divs de los enfrentamientos
  }
}
function crearEnfrentamientos(idgrupo,numeroIdDiv) {

  var grupo = document.getElementById(idgrupo); // Se guarda la tbody en la que se hizo click.
  var pais1 = grupo.rows[0].cells[1].innerText; // Se guarda el primer pais de esa tabla.
  var pais2 = grupo.rows[1].cells[1].innerText; // Se guarda el segundo pais de esa tabla.
  var pais3 = grupo.rows[2].cells[1].innerText; // Se guarda el tercer pais de esa tabla.
  var pais4 = grupo.rows[3].cells[1].innerText; // Se guarda el cuarto pais de esa tabla.

  var vs1 = pais1 + " vs " + pais2; // Se crean los strings que se van a mostrar en la página.
  var vs2 = pais1 + " vs " + pais3;
  var vs3 = pais1 + " vs " + pais4;
  var vs4 = pais2 + " vs " + pais3;
  var vs5 = pais3 + " vs " + pais4;
  var vs6 = pais2 + " vs " + pais4;

  var listaVs = [vs1, vs2, vs3, vs4, vs5, vs6]; // Se crea una lista que tiene adentro los Strings que se hicieron arriba.
  var idDiv = "nuevoDiv"+numeroIdDiv;  // Variable que va a ser la id del div que se creará.
  var enfrentamientos = document.getElementById("enfrentamientos"); //Se guarda en una variable el div en el cual se van a insertar los enfrentamientos.
  $("#enfrentamientos").append($('<div/>', { // Se inserta dentro del div "enfrentamientos", otro div.
    'class' : 'col-12 espacio bordesRedondos',
    'id' : idDiv
  }));
  listaVs.forEach(function(vs) { // Este foreach recorre la lista donde estan los Strings y los va
    var p = document.createElement("p"); //Crea un elemento P.
    $(p).toggleClass("enfrentamientos"); //Le agrega al P creado, la clase enfrentamiento de css.
    p.innerHTML = vs; // Le inserta al elemento p, uno de los Strings de la lista "listaVs".
    document.getElementById(idDiv).appendChild(p); // Se inserta el P en el div.
  });

  enfrentamientos.appendChild(document.getElementById(idDiv));// Se inserta en el div de enfrentamientos, un grupo de enfrentamientos.

  $("html, body").animate({
    scrollTop: $("#enfrentamientos").offset().top
  }, 1000); // Animación para que vaya hacia los enfrentamientos que se crearon.

}
function crearTodosLosEnfrentamientos(){
  var listaIdGrupos = ['grupoA','grupoB','grupoC','grupoD','grupoE','grupoF','grupoG','grupoH']; //Lista con los ID de cada una de las tbody de los grupos.

  for (var i = 0; i < listaIdGrupos.length; i++){
    crearEnfrentamientos(listaIdGrupos[i],i); //Por cada grupo, genera los enfrentamientos.
  }
}
