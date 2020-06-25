$(document).on('turbolinks:load',(function() {
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
}));
  
$(window).load('turbolinks:load',function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(300).fadeOut(200);
  $('#loader').delay(100).fadeOut(100);
  $('#wrap').css('display', 'block');
});
  
//10秒たったら強制的にロード画面を非表示
$(document).on('turbolinks:load',(function(){
  setTimeout('stopload()',3000);
}));
  
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(300).fadeOut(200);
  $('#loader').delay(100).fadeOut(100);
}
