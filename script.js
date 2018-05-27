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

var partidosJSON = {
  "partidos": [
    // 14 de junio
    {
      "id": 1,
      "estadio": "Luzhniki Stadium",
      "ciudad": "Moscú",
      "fecha": "Jueves 14 de junio",
      "hora": "18:00",
      "participantes": ["Rusia", "Arabia Saudí"]
    },
    // 15 de junio
    {
      "id": 2,
      "estadio": "Ekaterinburg Arena",
      "ciudad": "Ekaterimburgo",
      "fecha": "Viernes 15 de junio",
      "hora": "17:00",
      "participantes": ["Egipto", "Uruguay"]
    },
    {
      "id": 3,
      "estadio": "Estadio de San Petersburgo",
      "ciudad": "San Petersburgo",
      "fecha": "Viernes 15 de junio",
      "hora": "18:00",
      "participantes": ["Marruecos", "Irán"]
    },
    {
      "id": 4,
      "estadio": "Fisht Stadium",
      "ciudad": "Sochi",
      "fecha": "Viernes 15 de Junio",
      "hora": "21:00",
      "participantes": ["Portugal", "España"]
    },
    // 16 de junio
    {
      "id": 5,
      "estadio": "Kazan Arena",
      "ciudad": "Kazán",
      "fecha": "Sábado 16 de junio",
      "hora": "13:00",
      "participantes": ["Francia", "Australia"]
    },
    {
      "id": 6,
      "estadio": "Spartak Stadium",
      "ciudad": "Moscú",
      "fecha": "Sábado 16 de junio",
      "hora": "16:00",
      "participantes": ["Argentina", "Islandia"]
    },
    {
      "id": 7,
      "estadio": "Mordovia Arena",
      "ciudad": "Saransk",
      "fecha": "Sábado 16 de junio",
      "hora": "19:00",
      "participantes": ["Perú", "Dinamarca"]
    },
    {
      "id": 8,
      "estadio": "Kaliningrad Stadium",
      "ciudad": "Kaliningrado",
      "fecha": "Sábado 16 de junio",
      "hora": "21:00",
      "participantes": ["Croacia", "Nigeria"]
    },
    // 17 de junio
    {
      "id": 9,
      "estadio": "Samara Arena",
      "ciudad": "Samara",
      "fecha": "Domingo 17 de junio",
      "hora": "16:00",
      "participantes": ["Costa Rica", "Serbia"]
    },
    {
      "id": 10,
      "estadio": "Luzhniki Stadium",
      "ciudad": "Moscú",
      "fecha": "Domingo 17 de junio",
      "hora": "18:00",
      "participantes": ["Alemania", "México"]
    },
    {
      "id": 11,
      "estadio": "Rostov Arena",
      "ciudad": "Rostov del Don",
      "fecha": "Domingo 17 de junio",
      "hora": "21:00",
      "participantes": ["Brasil", "Suiza"]
    },
    // 18 de junio
    {
      "id": 12,
      "estadio": "Nizhny Novgorod Stadium",
      "ciudad": "Nizhni Nóvgorod",
      "fecha": "Lunes 18 de junio",
      "hora": "15:00",
      "participantes": ["Suecia", "Corea del Sur"]
    },
    {
      "id": 13,
      "estadio": "Fisht Stadium",
      "ciudad": "Fisht Stadium",
      "fecha": "Lunes 18 de junio",
      "hora": "18:00",
      "participantes": ["Bélgica", "Panamá"]
    },
    {
      "id": 14,
      "estadio": "Volgograd Arena",
      "ciudad": "Volgogrado",
      "fecha": "Lunes 18 de junio",
      "hora": "21:00",
      "participantes": ["Túnez", "Inglaterra"]
    },
    // 19 de junio
    {
      "id": 15,
      "estadio": "Mordovia Arena",
      "ciudad": "Saransk",
      "fecha": "Martes 19 de junio",
      "hora": "15:00",
      "participantes": ["Colombia", "Japón"]
    },
    {
      "id": 16,
      "estadio": "Spartak Stadium",
      "ciudad": "Moscú",
      "fecha": "Martes 19 de junio",
      "hora": "18:00",
      "participantes": ["Polonia", "Senegal"]
    },
    {
      "id": 17,
      "estadio": "estadio de San Petersburgo",
      "ciudad": "San Petersburgo",
      "fecha": "Martes 19 de junio",
      "hora": "21:00",
      "participantes": ["Rusia", "Egipto"]
    },
    // 20 de junio
    {
      "id": 18,
      "estadio": "Luzhniki Stadium",
      "ciudad": "Moscú",
      "fecha": "Miércoles 20 de junio",
      "hora": "15:00",
      "participantes": ["Portugal", "Marruecos"]
    },
    {
      "id": 19,
      "estadio": "Rostov Arena",
      "ciudad": "Rostov del Don",
      "fecha": "Miércoles 20 de junio",
      "hora": "18:00",
      "participantes": ["Uruguay", "Arabia Saudí"]
    },
    {
      "id": 20,
      "estadio": "Kazan Arena",
      "ciudad": "Kazán",
      "fecha": "Miércoles 20 de junio",
      "hora": "21:00",
      "participantes": ["Irán", "España"]
    },
    // 21 de junio
    {
      "id": 21,
      "estadio": "Samara Arena",
      "ciudad": "Samara",
      "fecha": "Jueves 21 de junio",
      "hora": "16:00",
      "participantes": ["Dinamarca", "Australia"]
    },
    {
      "id": 22,
      "estadio": "Ekaterinburg Arena",
      "ciudad": "Ekaterimburgo",
      "fecha": "Jueves 21 de junio",
      "hora": "20:00",
      "participantes": ["Francia", "Perú"]
    },
    {
      "id": 23,
      "estadio": "Nizhny Novgorod Stadium",
      "ciudad": "Nizhni Nóvgorod",
      "fecha": "Jueves 21 de junio",
      "hora": "21:00",
      "participantes": ["Argentina", "Croacia"]
    },
    // 22 de junio
    {
      "id": 24,
      "estadio": "estadio de San Petersburgo",
      "ciudad": "San Petersburgo",
      "fecha": "Viernes 22 de junio",
      "hora": "15:00",
      "participantes": ["Brasil", "Costa Rica"]
    },
    {
      "id": 25,
      "estadio": "Volgograd Arena",
      "ciudad": "Volgogrado",
      "fecha": "Viernes 22 de junio",
      "hora": "18:00",
      "participantes": ["Nigeria", "Islandia"]
    },
    {
      "id": 26,
      "estadio": "Kaliningrad Stadium",
      "ciudad": "Kaliningrado",
      "fecha": "Viernes 22 de junio",
      "hora": "20:00",
      "participantes": ["Serbia", "Suiza"]
    },
    // 23 de junio
    {
      "id": 27,
      "estadio": "Spartak Stadium",
      "ciudad": "Moscú",
      "fecha": "Sábado 23 de junio",
      "hora": "15:00",
      "participantes": ["Bélgica", "Túnez"]
    },
    {
      "id": 28,
      "estadio": "Rostov Arena",
      "ciudad": "Rostov del Don",
      "fecha": "Sábado 23 de junio",
      "hora": "18:00",
      "participantes": ["Corea del Sur", "México"]
    },
    {
      "id": 29,
      "estadio": "Fisht Stadium",
      "ciudad": "Sochi",
      "fecha": "Sábado 23 de junio",
      "hora": "21:00",
      "participantes": ["Alemania", "Suecia"]
    },
    // 24 de junio
    {
      "id": 30,
      "estadio": "Nizhny Novgorod Stadium",
      "ciudad": "Nizhni Nóvgorod",
      "fecha": "Domingo 24 de junio",
      "hora": "15:00",
      "participantes": ["Inglaterra", "Panamá"]
    },
    {
      "id": 31,
      "estadio": "Ekaterinburg Arena",
      "ciudad": "Ekaterimburgo",
      "fecha": "Domingo 24 de junio",
      "hora": "20:00",
      "participantes": ["Japón", "Senegal"]
    },
    {
      "id": 32,
      "estadio": "Kazan Arena",
      "ciudad": "Kazán",
      "fecha": "Domingo 24 de junio",
      "hora": "21:00",
      "participantes": ["Polonia", "Colombia"]
    },
    // 25 de junio
    {
      "id": 33,
      "estadio": "Volgograd Arena",
      "ciudad": "Volgogrado",
      "fecha": "Lunes 25 de junio",
      "hora": "17:00",
      "participantes": ["Arabia Saudí", "Egipto"]
    },
    {
      "id": 34,
      "estadio": "Samara Arena",
      "ciudad": "Samara",
      "fecha": "Lunes 25 de junio",
      "hora": "18:00",
      "participantes": ["Uruguay", "Rusia"]
    },
    {
      "id": 35,
      "estadio": "Kaliningrad Stadium",
      "ciudad": "Kaliningrado",
      "fecha": "Lunes 25 de junio",
      "hora": "20:00",
      "participantes": ["España", "Marruecos"]
    },
    {
      "id": 36,
      "estadio": "Mordovia Arena",
      "ciudad": "Saransk",
      "fecha": "Lunes 25 de junio",
      "hora": "21:00",
      "participantes": ["Irán", "Portugal"]
    },
    // 26 de junio
    {
      "id": 37,
      "estadio": "Fisht Stadium",
      "ciudad": "Sochi",
      "fecha": "Martes 26 de junio",
      "hora": "17:00",
      "participantes": ["Australia", "Perú"]
    },
    {
      "id": 38,
      "estadio": "Luzhniki Stadium",
      "ciudad": "Moscú",
      "fecha": "Martes 26 de junio",
      "hora": "17:00",
      "participantes": ["Dinamarca", "Francia"]
    },
    {
      "id": 39,
      "estadio": "estadio de San Petersburgo",
      "ciudad": "San Petersburgo",
      "fecha": "Martes 26 de junio",
      "hora": "21:00",
      "participantes": ["Nigeria", "Argentina"]
    },
    {
      "id": 40,
      "estadio": "Rostov Arena",
      "ciudad": "Rostov del Don",
      "fecha": "Martes 26 de junio",
      "hora": "21:00",
      "participantes": ["Islandia", "Croacia"]
    },
    // 27 de junio
    {
      "id": 41,
      "estadio": "Kazan Arena",
      "ciudad": "Kazán",
      "fecha": "Miércoles 27 de junio",
      "hora": "17:00",
      "participantes": ["Corea del Sur", "Alemania"]
    },
    {
      "id": 42,
      "estadio": "Ekaterinburg Arena",
      "ciudad": "Ekaterimburgo",
      "fecha": "Miércoles 27 de junio",
      "hora": "19:00",
      "participantes": ["México", "Suecia"]
    },
    {
      "id": 43,
      "estadio": "Spartak Stadium",
      "ciudad": "Moscú",
      "fecha": "Miércoles 27 de junio",
      "hora": "21:00",
      "participantes": ["Serbia", "Brasil"]
    },
    {
      "id": 44,
      "estadio": "Nizhny Novgorod Stadium",
      "ciudad": "Nizhni Nóvgorod",
      "fecha": "Miércoles 27 de junio",
      "hora": "21:00",
      "participantes": ["Suiza", "Costa Rica"]
    },
    // 28 de junio
    {
      "id": 45,
      "estadio": "Volgograd Arena",
      "ciudad": "Volgogrado",
      "fecha": "Jueves 28 de junio",
      "hora": "17:00",
      "participantes": ["Japón", "Polonia"]
    },
    {
      "id": 46,
      "estadio": "Samara Arena",
      "ciudad": "Samara",
      "fecha": "Jueves 28 de junio",
      "hora": "18:00",
      "participantes": ["Senegal", "Colombia"]
    },
    {
      "id": 47,
      "estadio": "Mordovia Arena",
      "ciudad": "Saransk",
      "fecha": "Jueves 28 de junio",
      "hora": "21:00",
      "participantes": ["Panamá", "Túnez"]
    },
    {
      "id": 48,
      "estadio": "Kaliningrad Stadium",
      "ciudad": "Kaliningrado",
      "fecha": "Jueves 28 de junio",
      "hora": "21:00",
      "participantes": ["Inglaterra", "Bélgica"]
    },
  ]
};

function vaciarDiv() {
  for (var i = 0; i < 9; i++) {
    $("#nuevoDiv" + i).remove(); // Borra todos los divs de los enfrentamientos
  }
}

function irAEnfrentamientos() {
  $("html, body").animate({
    scrollTop: $("#enfrentamientos").offset().top
  }, 1000);
}
function irAPartidos(){
  $("html, body").animate({
    scrollTop: $("#partidos").offset().top
  }, 1000);
}

function crearEnfrentamientos(idgrupo, numeroIdDiv) {

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
  var idDiv = "nuevoDiv" + numeroIdDiv; // Variable que va a ser la id del div que se creará.
  var enfrentamientos = $("#enfrentamientos"); //Se guarda en una variable el div en el cual se van a insertar los enfrentamientos.
  enfrentamientos.append($('<div/>', { // Se inserta dentro del div "enfrentamientos", otro div.
    'class': 'col-12 espacio bordesRedondos',
    'id': idDiv
  }));
  listaVs.forEach(function(vs) { // Este foreach recorre la lista donde estan los Strings y los va
    var p = document.createElement("p"); //Crea un elemento P.
    //var input = document.createElement("input");
    //$(p).toggleClass("enfrentamientos"); //Le agrega al P creado, la clase enfrentamiento de css.
    p.innerHTML = vs; // Le inserta al elemento p, uno de los Strings de la lista "listaVs".
    $('#' + idDiv).append(p); // Se inserta el P en el div.
    //$('#'+idDiv).append(input);
  });

  enfrentamientos.append($('#' + idDiv)); // Se inserta en el div de enfrentamientos, un grupo de enfrentamientos.
}

function crearTodosLosEnfrentamientos() {
  var listaIdGrupos = ['grupoA', 'grupoB', 'grupoC', 'grupoD', 'grupoE', 'grupoF', 'grupoG', 'grupoH']; //Lista con los ID de cada una de las tbody de los grupos.

  for (var i = 0; i < listaIdGrupos.length; i++) {
    crearEnfrentamientos(listaIdGrupos[i], i); //Por cada grupo, genera los enfrentamientos.
  }
  irAEnfrentamientos();
}

function prueba() {
  var resultadoUruguay = $('#resultadoUruguay').val();
  var resultadoRusia = $('#resultadoRusia').val();
  var grupo = document.getElementById('grupoA');
  if (resultadoUruguay < resultadoRusia) {
    grupo.rows[0].cells[2].innerHTML = parseInt(grupo.rows[0].cells[2].innerText) + 3;
    grupo.rows[0].cells[4].innerHTML = parseInt(grupo.rows[0].cells[4].innerText) + 1;
    grupo.rows[3].cells[6].innerHTML = parseInt(grupo.rows[3].cells[6].innerText) + 1;
  } else if (resultadoRusia < resultadoUruguay) {
    grupo.rows[3].cells[2].innerHTML = parseInt(grupo.rows[3].cells[2].innerText) + 3;
    grupo.rows[3].cells[4].innerHTML = parseInt(grupo.rows[3].cells[4].innerText) + 1;
    grupo.rows[0].cells[6].innerHTML = parseInt(grupo.rows[0].cells[6].innerText) + 1;
  } else if (resultadoRusia === resultadoUruguay) {
    grupo.rows[0].cells[2].innerHTML = parseInt(grupo.rows[0].cells[2].innerText) + 1;
    grupo.rows[3].cells[2].innerHTML = parseInt(grupo.rows[3].cells[2].innerText) + 1;
    grupo.rows[0].cells[5].innerHTML = parseInt(grupo.rows[0].cells[5].innerText) + 1;
    grupo.rows[3].cells[5].innerHTML = parseInt(grupo.rows[3].cells[5].innerText) + 1;
  }
  $("html, body").animate({
    scrollTop: $("#grupoA").offset().top
  }, 1000);
}


function mostrarPartido(partido) {
  console.log(partido.participantes[0] + " vs " + partido.participantes[1]);
}

function crearPartido(contenido, numeroIdDiv) {
  idDiv = "partido" + numeroIdDiv;
  var partidos = $("#partidos");
  partidos.append($('<div/>', {
    'class': 'col-12 espacio bordesRedondos',
    'id': idDiv
  }));
  var p = document.createElement("p");
  p.innerHTML = contenido;
  $('#' + idDiv).append(p);

}

function crearTodosLosPartidos() {
  for (var i = 0; i < partidosJSON.partidos.length; i++) {
    var infoPartido = partidosJSON.partidos[i].fecha + " - " + partidosJSON.partidos[i].hora + "\n" + "Estadio: " + partidosJSON.partidos[i].estadio + " (" + partidosJSON.partidos[i].ciudad + ")" + "\n" + partidosJSON.partidos[i].participantes[0] + " vs " + partidosJSON.partidos[i].participantes[1]
    crearPartido(infoPartido, i);
  }
  irAPartidos();
}

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
