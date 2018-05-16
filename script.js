$("#b1").click(function(){
  $("html, body").animate({ scrollTop: $('body').offset().top}, 1000);
});

$("#b2").click(function(){
  $("html, body").animate({ scrollTop: $('#grupos').offset().top }, 1000);
});

$("#b3").click(function(){
  $("html, body").animate({ scrollTop: $('#equipos').offset().top }, 1000);
});
