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
    $("#nuevoDiv"+i).remove();
  }
}
function irAEnfrentamientos(){
  $("html, body").animate({
    scrollTop: $("#enfrentamientos").offset().top
  }, 1000);
}
function crearEnfrentamientos(idgrupo,numeroIdDiv) {

  var grupo = document.getElementById(idgrupo);
  var pais1 = grupo.rows[0].cells[1].innerText;
  var pais2 = grupo.rows[1].cells[1].innerText;
  var pais3 = grupo.rows[2].cells[1].innerText;
  var pais4 = grupo.rows[3].cells[1].innerText;

  var vs1 = pais1 + " vs " + pais2;
  var vs2 = pais1 + " vs " + pais3;
  var vs3 = pais1 + " vs " + pais4;
  var vs4 = pais2 + " vs " + pais3;
  var vs5 = pais3 + " vs " + pais4;
  var vs6 = pais2 + " vs " + pais4;

  var listaVs = [vs1, vs2, vs3, vs4, vs5, vs6];
  var idDiv = "nuevoDiv"+numeroIdDiv;
  var enfrentamientos = document.getElementById("enfrentamientos");
  $("#enfrentamientos").append($('<div/>', {
    'class' : 'col-12',
    'id' : idDiv
  }));
$("#"+idDiv).toggleClass("bordesRedondos");

  listaVs.forEach(function(vs) {
    var p = document.createElement("p");
    $(p).toggleClass("enfrentamientos");
    p.innerHTML = vs;
    document.getElementById(idDiv).appendChild(p);
  });

  enfrentamientos.appendChild(document.getElementById(idDiv));

}
function crearTodosLosEnfrentamientos(){
  var listaIdGrupos = ['grupoA','grupoB','grupoC','grupoD','grupoE','grupoF','grupoG','grupoH'];

  for (var i = 0; i < listaIdGrupos.length; i++){
    crearEnfrentamientos(listaIdGrupos[i],i);
  }
  irAEnfrentamientos();
}
