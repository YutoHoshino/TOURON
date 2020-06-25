$(document).on('turbolinks:load', ()=> {

  function buildHTML(url) {
    var html =
      `
      <div class="js-image2">
        <img src="${url}" width="100%" height="200px alt="イラスト1">
        <h1 class="text2">削除</h1>
      <div>
      `
    return html;
  }


  
  let label = $("label");

  label.on("change", function(e) {
    let file = e.target.files[0];
    let blobUrl = window.URL.createObjectURL(file);

    $(".edit_user-main-right-img-area").prepend(buildHTML(blobUrl));
    $(".rooms-from-img").addClass("js-image-remove");
  });

  $(".edit_user-main-right-img-area").on("click", function() {
    
    $(".js-image2").addClass("js-image-remove");
    $(".rooms-from-img").removeClass("js-image-remove");
  });




  // ボタン
  var url   = location.href;
  if(url == "http://localhost:3000/mypages/edit_user"){
    $(".home-btn").removeClass("choice-box");
    $(".choice-box_edit").addClass("choice-box");
  }


  if(url == "http://localhost:3000/mypages/info"){
    $(".home-btn").removeClass("choice-box");
    $(".inquiry-mypage").addClass("choice-box");
  }

});