
$(function(){
  function buildHTML(talk){
    if ( talk.status_id === 1 && talk.image ) {
      var html =
      `<div class="room-main-content__left__user">
        <div class="room-main-content__left__user--image">
        </div>
        <div class="room-main-content__left__user--text">
          <div class="room-main-content__left__user--text--name">
          </div>
          ${talk.text}
          <img src=${talk.image} class="room-main-content__left__user--text--image">
        </div>
        </div>`
      return html;
    } else if (talk.status_id === 1 && talk.text.length > 100) {
      `<div class="room-main-content__left__user">
        <div class="room-main-content__left__user--image">
        </div>
        <div class="room-main-content__left__user--text">
          <div class="room-main-content__left__user--text--name">
          </div>
          ${talk.text}
        </div>
        </div>`
      return html;
    } else if (talk.status_id === 1){
      var html =
      `<div class="room-main-content__left__user">
        <div class="room-main-content__left__user--image">
        </div>
        <div class="room-main-content__left__user--text2">
          <div class="room-main-content__left__user--text--name">
          </div>
        ${talk.text}
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2 && talk.image ) {
      var html =
      `<div class="room-main-content__right__user">
        <div class="room-main-content__right__user--image">
        </div>
        <div class="room-main-content__right__user--text">
          <div class="room-main-content__right__user--text--name">
          </div>
          ${talk.text}
          <img src=${talk.image} class="room-main-content__right__user--text--image">
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2 && talk.text.length > 100) {
      var html =
      `<div class="room-main-content__right__user">
        <div class="room-main-content__right__user--image">
        </div>
        <div class="room-main-content__right__user--text">
          <div class="room-main-content__right__user--text--name">
          </div>
          ${talk.text}
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2) {
      var html =
      `<div class="room-main-content__right__user">
        <div class="room-main-content__right__user--image">
        </div>
        <div class="room-main-content__right__user--text2">
          <div class="room-main-content__right__user--text--name">
          </div>
          ${talk.text}
        </div>
        </div>`
      return html;
    };
  }
  $('.from').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(url)
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      var elements1 = document.getElementById('box1');
      var elements2 = document.getElementById('box2');
      if (elements1.checked === true) {
      $('.room-main-content__left').append(html);
      } else if (elements2.checked === true) {
        $('.room-main-content__right').append(html);
      };
      $('form')[0].reset();
    })
  })
});

