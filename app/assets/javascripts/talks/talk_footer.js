$(document).on('turbolinks:load', ()=> {

    // タブスイッチ（反対）
  $(".oposition").on("click", function() {
    $("#new-talk_post2").removeClass("content-remove");
    $(".message-footer2").removeClass("content-remove");
    $(".oposition").addClass("tabs-swith-tbjs");
    
    $("#new-talk_post").addClass("content-remove");
    $(".message-footer").addClass("content-remove");
    $(".agree").removeClass("tabs-swith-tbjs");
  })

    // タブスイッチ（賛成）
  $(".agree").on("click", function() {
    $("#new-talk_post").removeClass("content-remove");
    $(".message-footer").removeClass("content-remove");
    $(".agree").addClass("tabs-swith-tbjs");
  
    
    $("#new-talk_post2").addClass("content-remove");
    $(".message-footer2").addClass("content-remove");
    $(".oposition").removeClass("tabs-swith-tbjs");
  })


});
