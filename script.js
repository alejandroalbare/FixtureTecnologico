$("#b1").click(function() {
  $("html, body").animate({
    scrollTop: $('body').offset().top
  }, 1000);
});

$("#b2").click(function() {
  $("html, body").animate({
    scrollTop: $('#grupos').offset().top
  }, 1000);
});

$("#b3").click(function() {
  $("html, body").animate({
    scrollTop: $('#enfrentamientos').offset().top
  }, 1000);
});

function vaciarDiv(){
  for(var i = 0; i < 9; i++){
    $("#nuevoDiv"+i).remove(); // Borra todos los divs de los enfrentamientos
  }
}
function irAEnfrentamientos(){
  $("html, body").animate({
    scrollTop: $("#enfrentamientos").offset().top
  }, 1000);
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
  var enfrentamientos = $("#enfrentamientos"); //Se guarda en una variable el div en el cual se van a insertar los enfrentamientos.
  $("#enfrentamientos").append($('<div/>', { // Se inserta dentro del div "enfrentamientos", otro div.
    'class' : 'col-12 espacio bordesRedondos',
    'id' : idDiv
  }));
  listaVs.forEach(function(vs) { // Este foreach recorre la lista donde estan los Strings y los va
    var p = document.createElement("p"); //Crea un elemento P.
    //var input = document.createElement("input");
    $(p).toggleClass("enfrentamientos"); //Le agrega al P creado, la clase enfrentamiento de css.
    p.innerHTML = vs; // Le inserta al elemento p, uno de los Strings de la lista "listaVs".
    $('#'+idDiv).append(p);// Se inserta el P en el div.
    //$('#'+idDiv).append(input);
  });

  enfrentamientos.append($('#'+idDiv));// Se inserta en el div de enfrentamientos, un grupo de enfrentamientos.
}
function crearTodosLosEnfrentamientos(){
  var listaIdGrupos = ['grupoA','grupoB','grupoC','grupoD','grupoE','grupoF','grupoG','grupoH']; //Lista con los ID de cada una de las tbody de los grupos.

  for (var i = 0; i < listaIdGrupos.length; i++){
    crearEnfrentamientos(listaIdGrupos[i],i); //Por cada grupo, genera los enfrentamientos.
  }
  irAEnfrentamientos();
}

function prueba(){
  var resultadoUruguay = $('#resultadoUruguay').val();
  var resultadoRusia = $('#resultadoRusia').val();
  var grupo = document.getElementById('grupoA');
  if(resultadoUruguay < resultadoRusia){
    grupo.rows[0].cells[2].innerHTML = parseInt(grupo.rows[0].cells[2].innerText)+3;
    grupo.rows[0].cells[4].innerHTML = parseInt(grupo.rows[0].cells[4].innerText)+1;
    grupo.rows[3].cells[6].innerHTML = parseInt(grupo.rows[3].cells[6].innerText)+1;
  }else if (resultadoRusia < resultadoUruguay) {
    grupo.rows[3].cells[2].innerHTML = parseInt(grupo.rows[3].cells[2].innerText)+3;
    grupo.rows[3].cells[4].innerHTML = parseInt(grupo.rows[3].cells[4].innerText)+1;
    grupo.rows[0].cells[6].innerHTML = parseInt(grupo.rows[0].cells[6].innerText)+1;
  }else if (resultadoRusia === resultadoUruguay) {
    grupo.rows[0].cells[2].innerHTML =  parseInt(grupo.rows[0].cells[2].innerText)+1;
    grupo.rows[3].cells[2].innerHTML =  parseInt(grupo.rows[3].cells[2].innerText)+1;
    grupo.rows[0].cells[5].innerHTML = parseInt(grupo.rows[0].cells[5].innerText)+1;
    grupo.rows[3].cells[5].innerHTML = parseInt(grupo.rows[3].cells[5].innerText)+1;
  }

}
var partidosJSON = {
  "partido1": {
    "ubicacion": "Planeta Tierra",
    "nombre": "Partido 1",
    "hora": "16:50 hs",
    "participantes": ["Uruguay","Rusia"]
  }
};
//var grupos =  [grupo1];
//var grupo1 = ["Uruguay","Rusia","Arabia","Egipto"];
//grupos>
      //  grupo1>
              //  listadeMiembros
var primerPartido = partidosJSON.partido1.nombre+"\n"+partidosJSON.partido1.participantes[0]+" vs "+partidosJSON.partido1.participantes[1]+"\n"+partidosJSON.partido1.ubicacion+"\n"+partidosJSON.partido1.hora;
console.log(primerPartido);

var end = new Date('6/14/2018 12:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('cuentaRegresiva').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('cuentaRegresiva').innerHTML = days + ' dias, ';
        document.getElementById('cuentaRegresiva').innerHTML += hours + ' horas, ';
        document.getElementById('cuentaRegresiva').innerHTML += minutes + ' minutos y ';
        document.getElementById('cuentaRegresiva').innerHTML += seconds + ' segundos';
    }

    timer = setInterval(showRemaining, 1000);
