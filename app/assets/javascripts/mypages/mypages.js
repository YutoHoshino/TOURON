$(document).on('turbolinks:load', ()=> {

    // 全ての部屋が押された時
  $(".content-name").on("click", function() {
    $(".content-name").addClass("choice-contens");
    $(".content-name2").removeClass("choice-contens");
    $(".content-name3").removeClass("choice-contens");
    
    $(".content-main2").addClass("content-remove");
    $(".content-main3").addClass("content-remove");
    $(".content-main").removeClass("content-remove");
  })

  // 自分の部屋が押された時
  $(".content-name2").on("click", function() {
    $(".content-name2").addClass("choice-contens");
    $(".content-name").removeClass("choice-contens");
    $(".content-name3").removeClass("choice-contens");

    $(".content-main").addClass("content-remove");
    $(".content-main3").addClass("content-remove");
    $(".content-main2").removeClass("content-remove");
  })

  // いいね部屋を押された時
  $(".content-name3").on("click", function() {
    $(".content-name3").addClass("choice-contens");
    $(".content-name").removeClass("choice-contens");
    $(".content-name2").removeClass("choice-contens");

    $(".content-main").addClass("content-remove");
    $(".content-main2").addClass("content-remove");
    $(".content-main3").removeClass("content-remove");
  })




  // ユーザーedit

  // $(".home-btn").on("click", function() {
  //   $(".home-btn").addClass("choice-box");
  //   $(".inquiry-mypage").removeClass("choice-box");
  //   $(".mypage-main-box").removeClass("content-remove");
  //   $(".mypage-main-box-home").addClass("content-remove");
  // })
  
  // $(".inquiry-mypage").on("click", function() {
  //   $(".inquiry-mypage").addClass("choice-box");
  //   $(".home-btn").removeClass("choice-box");
  //   $(".mypage-main-box").addClass("content-remove");
  //   $(".mypage-main-box-home").removeClass("content-remove");
  // })


});
