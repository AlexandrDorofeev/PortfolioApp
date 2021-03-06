$(document).ready(function() {

  // Disable pagename if <100px from the top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.top').removeClass("not-active");
    } else {
      $('.top').addClass("not-active");
    }
  });

  // Pagename scrollup
  $('.top').click(function() {
    if ($(window).width() < 1024) {
      $(".main-nav").hide(200);
    };
     $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // Dropdown
  $(".header button").click(function() {
    $(".main-nav").slideToggle(300);
  });

  // Menu smooth scroll
  $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        if ($(window).width() < 1024) {
          $(".main-nav").hide(200);
        };
        if ($(window).width() >= 1200) {
          $('body,html').animate({ scrollTop: top }, 1000, 'easeInOutQuint');
         }else if ($(window).width() < 1200) {
           $('body,html').animate({ scrollTop: top }, 1000, 'easeInOutQuint');
         }else if ($(window).width() < 1024) {
           $('body,html').animate({ scrollTop: top + 40 }, 1000, 'easeInOutQuint');
         }else if ($(window).width() < 768) {
           $('body,html').animate({ scrollTop: top + 20 }, 1000, 'easeInOutQuint');
         };
    });

  // Actions with a modal window
	$("a#cabin").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".cabin .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".cabin .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.cabin .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.cabin .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  $("a#cake").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".cake .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".cake .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.cake .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.cake .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  $("a#circus").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".circus .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".circus .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.circus .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.circus .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  $("a#game").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".game .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".game .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.game .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.game .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  $("a#safe").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".safe .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".safe .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.safe .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.safe .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  $("a#submarine").click(function(event) {
    event.preventDefault();
    $("body").addClass("no-scroll");
    $(".submarine .modal").addClass("animated fadeInDown");
    $(".overlay").fadeIn(400,
      function() {
        $(".submarine .modal")
          .css("display", "block")
          .animate({opacity: 1}, 200);
    });
  });
	$('.close-btn').click(function(event) {
    event.preventDefault();
    $('.submarine .modal')
      .animate({opacity: 0, scrollTop: 0}, "fast",
        function() {
        $(this).css('display', 'none')
        $('.overlay').fadeOut(400)
        $("body").removeClass("no-scroll")
      }
    );
  });
  $(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      event.preventDefault();
      $('.submarine .modal')
        .animate({opacity: 0, scrollTop: 0}, "fast",
          function() {
          $(this).css('display', 'none')
          $('.overlay').fadeOut(400)
          $("body").removeClass("no-scroll")
        }
      );
    }
  });

  // Scrollup btn
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

AOS.init({
  duration: 500,
})
