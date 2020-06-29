$(document).on('turbolinks:load',(function(){
   function buildHTML(talk){
     var html =
     `<a href="/mypages.${talk.user_id}">
        <div class="talk_side__group" data-status-id=${talk.status_id} data-talk-id=${talk.id} data-id=${talk.user_id}>
          <img src=${talk.user_image} class="talk_side__group__image">
          <div class="talk_side__group__name">
          ${talk.user_username}
          </div>
        </div>
      </a>`
      return html;
    }
  $("#new-talk_post").on('submit', function(e) {
    e.preventDefault(); //デフォルトの送信イベントの停止
  var formData = new FormData(this);
  var url = $(this).attr("action") //action属性の中身(リクエスト送信先のurl)を取得
  $.ajax({
  url: url,
  type: "POST",
  data: formData,
  dataType: "json",
  processData: false,
  contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('[data-id = ' + data.user_id + ']').remove(); //同じuser_idを持ったブロック要素を削除 ※変数展開が独特
    $(".talk_side__bar").prepend(html);
  })
  .fail(function(){
    alert("データの取得に失敗しました")
    $('.from-btn-submit').prop('disabled', false);
  })
})
}));
    