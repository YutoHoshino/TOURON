$(document).on('turbolinks:load', ()=> {

    // タブスイッチ（反対）
  $(".oposition").on("click", function() {
    $(".new-talk_post2").removeClass("content-remove");
    $(".message-footer2").removeClass("content-remove");
    $(".oposition").addClass("tabs-swith-tbjs");
    
    $(".new-talk_post").addClass("content-remove");
    $(".message-footer").addClass("content-remove");
    $(".agree").removeClass("tabs-swith-tbjs");
  })

    // タブスイッチ（賛成）
  $(".agree").on("click", function() {
    $(".new-talk_post").removeClass("content-remove");
    $(".message-footer").removeClass("content-remove");
    $(".agree").addClass("tabs-swith-tbjs");
  
    
    $(".new-talk_post2").addClass("content-remove");
    $(".message-footer2").addClass("content-remove");
    $(".oposition").removeClass("tabs-swith-tbjs");
  })





  // 写真
  function buildHTML(url) {
    var html =
      `
      <div class="talks-js-image">
        <img src="${url}"</img>
        <p class="image-js">削除</p>
      <div>
      `
    return html;
  }

  // 変数の定義
  let file = document.querySelector("label");

  // ファイルの中身が変更されたらconsole.log
  file.addEventListener("change", function(e) {
    let file = e.target.files[0];
    let blobUrl = window.URL.createObjectURL(file);

    $(".message-footer-area-btn-submit").prepend(buildHTML(blobUrl));
    $(".rooms-from-img").addClass("js-image-remove");
  });

  $(".message-footer-area-btn-submit").on("click", function() {
    
    $(".talks-js-image").addClass("js-image-remove");
    $(".rooms-from-img").removeClass("js-image-remove");
  });


});
