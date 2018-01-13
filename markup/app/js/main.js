  $(document).ready(function () {
      $(".nav-list a[href*=#]").on("click", function (e) {
          var anchor = $(this);
          $(".nav-list li").removeClass('active');
          anchor.parent().addClass('active');
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top
          }, 777);
          e.preventDefault();
      });
  });
