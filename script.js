$("#b1").click(function(){
  $(this).toggleClass("changeColor");
  $("#b2").removeClass("changeColor");
  $("#b3").removeClass("changeColor");

  $("#s1").toggleClass("changeColor");
  $("#s2").removeClass("changeColor");
  $("#s3").removeClass("changeColor");
  $("html, body").animate({ scrollTop: $('body').offset().top}, 1000);
});

$("#b2").click(function(){
  $(this).toggleClass("changeColor");
  $("#b1").removeClass("changeColor");
  $("#b3").removeClass("changeColor");

  $("#s2").toggleClass("changeColor");
  $("#s1").removeClass("changeColor");
  $("#s3").removeClass("changeColor");
  $("html, body").animate({ scrollTop: $('#grupos').offset().top }, 1000);
});

$("#b3").click(function(){
  $(this).toggleClass("changeColor");
  $("#b1").removeClass("changeColor");
  $("#b2").removeClass("changeColor");

  $("#s3").toggleClass("changeColor");
  $("#s1").removeClass("changeColor");
  $("#s2").removeClass("changeColor");
  $("html, body").animate({ scrollTop: $('#equipos').offset().top }, 1000);
});
