$(document).on('turbolinks:load', ()=> {

  function buildHTML(url) {
    var html =
      `
      <div class="js-image">
        <img src="${url}" width="100%" height="200px></img>
        
        <h1 class="text">削除</h1>
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

    $(".right-contents").prepend(buildHTML(blobUrl));
    $(".rooms-from-img").addClass("js-image-remove");
  });

  $(".right-contents").on("click", function() {
    
    $(".js-image").addClass("js-image-remove");
    $(".rooms-from-img").removeClass("js-image-remove");
  });
  
});
