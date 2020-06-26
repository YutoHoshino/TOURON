
$(document).on('turbolinks:load',(function(){
  function buildHTML(talk){
    if ( talk.status_id === 1 && talk.image ) {
      var html =
      `<div class="room-main-content__left__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__left__user--image">
          <img src=${talk.user_image} class="room-main-content__left__user--image--main">
        </div>
        <div class="room-main-content__left__user--text">
          <div class="room-main-content__left__user--text--name">
            ${talk.user_username}
          </div>
          <div class="room-main-content__left__user--text--content">
            ${talk.text}
            <img src=${talk.image} class="room-main-content__left__user--text--content--image">
          </div>
        </div>
        </div>`
      return html;
    } else if (talk.status_id === 1 && talk.text.length > 100) {
      var html =
      `<div class="room-main-content__left__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__left__user--image">
          <img src=${talk.user_image} class="room-main-content__left__user--image--main">
        </div>
        <div class="room-main-content__left__user--text">
          <div class="room-main-content__left__user--text--name">
            ${talk.user_username}
          </div>
          <div class="room-main-content__left__user--text--content">
            ${talk.text}
          </div>
        </div>
        </div>`
      return html;
    } else if (talk.status_id === 1){
      var html =
      `<div class="room-main-content__left__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__left__user--image">
          <img src=${talk.user_image} class="room-main-content__left__user--image--main">
        </div>
        <div class="room-main-content__left__user--text2">
          <div class="room-main-content__left__user--text--name">
          ${talk.user_username}
          </div>
        ${talk.text}
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2 && talk.image ) {
      var html =
      `<div class="room-main-content__right__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__right__user--image">
          <img src=${talk.user_image} class="room-main-content__right__user--image--main">
        </div>
        <div class="room-main-content__right__user--text">
          <div class="room-main-content__right__user--text--name">
            ${talk.user_username}
          </div>
          <div class="room-main-content__right__user--text--content">
            ${talk.text}
            <img src=${talk.image} class="room-main-content__right__user--text--content--image">
          </div>
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2 && talk.text.length > 100) {
      var html =
      `<div class="room-main-content__right__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__right__user--image">
          <img src=${talk.user_image} class="room-main-content__right__user--image--main">
        </div>
        <div class="room-main-content__right__user--text">
          <div class="room-main-content__right__user--text--name">
          ${talk.user_username}
          </div>
          <div class="room-main-content__right__user--text--content">
            ${talk.text}
          </div>
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2) {
      var html =
      `<div class="room-main-content__right__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__right__user--image">
          <img src=${talk.user_image} class="room-main-content__right__user--image--main">
        </div>
        <div class="room-main-content__right__user--text2">
          <div class="room-main-content__right__user--text--name">
          ${talk.user_username}
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
      // var elements1 = document.getElementById('box1');
      // var elements2 = document.getElementById('box2');
      // var toggleBtn = document.getElementById("menu-button");
      // console.log(elements1.checked)
      // console.log(elements2.checked)
      if (data.status_id === 1) {
      $('.room-main-content__left').append(html);
      $('.room-main-content__left').animate({ scrollTop: 0});
      // elements1.checked = false ;
      // elements2.checked = true ;
      } else if (data.status_id === 2) {
        $('.room-main-content__right').append(html);
        $('.room-main-content__right').animate({ scrollTop: 0});
        // elements1.checked = true ;
        // elements2.checked = false ;
        // toggleBtn.classList.remove('close');
        // toggleBtn.classList.add('open');
        
        // document.getElementById('menu-open').style.display="block";
        // document.getElementById('menu-close').style.display="none";
      };
      $('form')[0].reset();
      $('.from-btn-submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.from-btn-submit').prop('disabled', false);
  });
  })
  var reloadMessages = function() {
    var last_talk_id = $('.room-main-content__left__user:last').data("talk-id");
    var last_talk_id2 = $('.room-main-content__right__user:last').data("talk-id");
    var status_id = $('.room-main-content__right__user:last').data("status-id")
    $.ajax({
      url: "api/talks",
      type: 'get',
      dataType: 'json',
      data: {
        id: last_talk_id,
        id2:last_talk_id2,
        status_id: status_id
          }
    })
    .done(function(talks) {
      if (talks.length !== 0) {
        var insertHTML = '';
        $.each(talks, function(i, talk) {
          insertHTML += buildHTML(talk)
          console.log(talk)
          if (talk.status_id === 1) {
            $('.room-main-content__left').append(insertHTML);
            $('.room-main-content__left').animate({ scrollTop: 0});
            return
            } else if (talk.status_id === 2) {
            $('.room-main-content__right').append(insertHTML);
            $('.room-main-content__right').animate({ scrollTop: 0});
            return
            }
        });
      }
    })
    .fail(function() {
    });
  };
  if (document.location.href.match(/\/rooms\/\d+\/talks/)) {
    setInterval(reloadMessages, 5000);
  }
}));

