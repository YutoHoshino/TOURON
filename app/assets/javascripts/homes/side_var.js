$(document).on('turbolinks:load', ()=>  {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 900 && $(this).scrollTop() <= 3500) {
      console.log('hello');
      $('.user-side-box-area').addClass("fixed");
    } else {
      $('.user-side-box-area').removeClass("fixed");
    }


  });
});

