$(document).on('turbolinks:load', ()=> {
  
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      prevEl: '.swiper-button-prev', //左側にあるこれ「＜」
      nextEl: '.swiper-button-next', //右側にあるこれ「＞」
    },
    loop: true, //画像のループの有無
    speed: 1000, //スライドするスピード
    pagination: { //ページネーションの種類
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true, //クリック判定の有無
    },
    autoplay: { //自動スライド
      delay: 3000, //３秒ごとに
      disableOnInteraction: true
    },
  });
});