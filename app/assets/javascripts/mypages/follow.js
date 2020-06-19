$(document).on('turbolinks:load', ()=> {

  // 全ての部屋が押された時
$(".follower-tabs").on("click", function() {
  $(".follower-tabs").addClass("follow-btn");
  $(".follow-tabs").removeClass("follow-btn");
  
  $(".follow-list").addClass("content-remove");
  $(".follower-list").removeClass("content-remove");
})

$(".follow-tabs").on("click", function() {
  $(".follow-tabs").addClass("follow-btn");
  $(".follower-tabs").removeClass("follow-btn");
  
  $(".follower-list").addClass("content-remove");
  $(".follow-list").removeClass("content-remove");
})

});
