$(document).ready(function() {

  /* Dropdown */
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });


	$("a#cabin").click(function(event){
    console.log("Working");
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$(".overlay").fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$(".content")
					.css("display", "block") // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('.close, .overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.content')
			.animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});

  /*Scroll Up */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
