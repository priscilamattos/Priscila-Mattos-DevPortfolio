// MOB MENU

$("#btn_nav").on("click", function () {
  $("#mob_nav").toggleClass("mob_nav_open");
  $("body").toggleClass("overflow_hidden");
  $(".btn_nav span").toggleClass("btn_opacity");
  $(this).toggleClass("btnNavActive");
});

$("#mob_nav .nav a").on("click", function () {
  $(".btn_nav").toggleClass("btnNavActive");
  $("#mob_nav").toggleClass("mob_nav_open");
  $("body").toggleClass("overflow_hidden");
});

$(document).ready(function () {
  var show = true;
  $(window).on("scroll", function () {
    if (!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(".services__content .about__title h3").offset().top;

    if (w_top >= e_top) {
      var time = 2;
      $("#counter").each(function () {
        $("h4").each(function () {
          var i = 1,
            num = $(this).data("num"),
            step = (1000 * time) / num,
            that = $(this),
            int = setInterval(function () {
              if (i <= num) {
                that.html(i);
              } else {
                clearInterval(int);
              }
              i++;
            }, step);
        });
      });

      show = false;
    }
  });
});

// SCROLL TOP BUTTON
$(document).ready(function () {
  $(window).on("scroll", function () {
    var w_top = $(window).scrollTop();
    var e_top = $("#about__content").offset().top;
    if (w_top >= e_top) {
      $(".scrollTop").css("opacity", "1");
    }
    if (w_top <= e_top) {
      $(".scrollTop").css("opacity", "0");
    }
  });
});
// SCROLL TOP BUTTON END

//MessageSent
$("#SentClose").on("click", function () {
  $("#MessageSent").fadeOut(500);
});
//MessageSent END
