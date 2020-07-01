
$(document).on('turbolinks:load',(function(){
  function buildHTML(talk){
    if ( talk.status_id === 1 && talk.image ) {
      var html =
      `<div class="room-main-content__left" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__left-image">
          <img src=${talk.user_image} >
        </div>
        <div class="room-main-content__left-text">
          <div class="room-main-content__left-text-box">
            ${talk.text}
            <img src=${talk.image} >
          </div>
          <div class="room-main-content__left-text-time">
          ${talk.updated_at}
          </div>
        </div>
        </div>`
      return html;
    // } else if (talk.status_id === 1 && talk.text.length > 100) {
    //   var html =
    //   `<div class="room-main-content__left__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
    //     <div class="room-main-content__left__user--image">
    //       <img src=${talk.user_image} class="room-main-content__left__user--image--main">
    //     </div>
    //     <div class="room-main-content__left__user--text">
    //       <div class="room-main-content__left__user--text--name">
    //         ${talk.user_username}
    //       </div>
    //       <div class="room-main-content__left__user--text--content">
    //         ${talk.text}
    //       </div>
    //     </div>
    //     </div>`
    //   return html;
    } else if (talk.status_id === 1){
      var html =
      `<div class="room-main-content__left" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__left-image">
          <img src=${talk.user_image} >
        </div>
        <div class="room-main-content__left-text">
          <div class="room-main-content__left-text-box">
            ${talk.text}
          </div>
          <div class="room-main-content__left-text-time">
          ${talk.updated_at}
          </div>
        </div>
        </div>`
      return html;
    } else if ( talk.status_id === 2 && talk.image ) {
      var html =
      `<div class="room-main-content__right" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__right-text">
          <div class="room-main-content__right-text-box">
            ${talk.text}
            <img src=${talk.image} >
          </div>
          <div class="room-main-content__right-text-time">
            ${talk.updated_at}
          </div>
        </div>
        <div class="room-main-content__right-image">
          <img src=${talk.user_image} >
        </div>
        </div>`
      return html;
    // } else if ( talk.status_id === 2 && talk.text.length > 100) {
    //   var html =
    //   `<div class="room-main-content__right__user" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
    //     <div class="room-main-content__right__user--image">
    //       <img src=${talk.user_image} class="room-main-content__right__user--image--main">
    //     </div>
    //     <div class="room-main-content__right__user--text">
    //       <div class="room-main-content__right__user--text--name">
    //       ${talk.user_username}
    //       </div>
    //       <div class="room-main-content__right__user--text--content">
    //         ${talk.text}
    //       </div>
    //     </div>
    //     </div>`
      // return html;
    } else if ( talk.status_id === 2) {
      var html =
      `<div class="room-main-content__right" data-status-id=${talk.status_id} data-talk-id=${talk.id}>
        <div class="room-main-content__right-text">
          <div class="room-main-content__right-text-box">
            ${talk.text}
          </div>
          <div class="room-main-content__right-text-time">
          ${talk.updated_at}
          </div>
        </div>
        <div class="room-main-content__right-image">
          <img src=${talk.user_image} >
        </div>
        </div>`
      return html;
    };
  }
  function buildHTML2(talk){
    var html2 =
    `<a href="/mypages.${talk.user_id}">
       <div class="talk_side__group" data-status-id=${talk.status_id} data-talk-id=${talk.id} data-id=${talk.user_id}>
         <img src=${talk.user_image} class="talk_side__group__image">
         <div class="talk_side__group__name">
         ${talk.user_username}
         </div>
       </div>
     </a>`
     return html2;
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
      contentType: false,
      timeout: 10000
    })
    .done(function(data){
      var html = buildHTML(data);
      var html2 = buildHTML2(data);
      $('[data-id = ' + data.user_id + ']').remove(); //同じuser_idを持ったブロック要素を削除 ※変数展開が独特
      $(".talk_side__bar").prepend(html2);
      if (data.status_id === 1) {
      $('.room-main-content').append(html);
      $('.room-main-content').animate({ scrollTop: $('.room-main-content')[0].scrollHeight});
      // elements1.checked = false ;
      // elements2.checked = true ;
      } else if (data.status_id === 2) {
      $('.room-main-content').append(html);
      $('.room-main-content').animate({ scrollTop: $('.room-main-content')[0].scrollHeight});
        // elements1.checked = true ;
        // elements2.checked = false ;
        // toggleBtn.classList.remove('close');
        // toggleBtn.classList.add('open');
        
        // document.getElementById('menu-open').style.display="block";
        // document.getElementById('menu-close').style.display="none";
      };
      $('form')[0].reset();
      $('.clip').val("");
      $('.oposition-area').val("");
      $('.from-btn-submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.from-btn-submit').prop('disabled', false);
  });
  })
  var reloadMessages = function() {
    var last_talk_id = $('.room-main-content__left:last').data("talk-id");
    var last_talk_id2 = $('.room-main-content__right:last').data("talk-id");
    var user_id = $('talk_side__group:last').data("id");
    // var status_id = $('.room-main-content__right:last').data("status-id")
    $.ajax({
      url: "api/talks",
      type: 'get',
      dataType: 'json',
      data: {
        id: last_talk_id,
        id2:last_talk_id2,
        user_id: user_id
        // ,status_id: status_id
          }
    })
    .done(function(talks) {
      if (talks.length !== 0) {
        var insertHTML = '';
        var insertHTML2 = '';
        $.each(talks, function(i, talk) {
          insertHTML += buildHTML(talk)
          insertHTML2 += buildHTML2(talk)
          $('[data-id = ' + talk.user_id + ']').remove(); //同じuser_idを持ったブロック要素を削除 ※変数展開が独特
          $(".talk_side__bar").prepend(insertHTML2);
        });
        
        $('.room-main-content').append(insertHTML);
        $('.room-main-content').animate({ scrollTop: $('.room-main-content')[0].scrollHeight});
      }
    })
    .fail(function() {
    });
  };
  if (document.location.href.match(/\/rooms\/\d+\/talks/)) {
    setInterval(reloadMessages, 5000);
  }
}));

