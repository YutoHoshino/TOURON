$(document).on('turbolinks:load', function () {
  
  let diff = 0;
  let time = gon.room;
  
  let startTime = new Date();
  let endTime = new Date(Date.now() + time * 60);
  console.log(endTime)
  $(function () {
    diff = endTime - startTime;
    countDown(diff);
  });
  
  
  function countDown(diff) {
    startTime = new Date();
    diff = endTime - startTime;
    let times = 24 * 60 * 60 * 1000;
    let hour = Math.floor(diff % times / (60 * 60 * 1000))
    let min = Math.floor(diff % times / (60 * 1000)) % 60
    let sec = Math.floor(diff % times / 1000) % 60 % 60
    if (diff > 0) {
      $("#Timer").text(hour + '：' + min + '：' + sec );
      setTimeout(function () {
        countDown(diff);
      });
    } else {
      //終了した時のテキスト
      $("#Timer").text('終了！'),
      $('.message-footer').remove(),
      $('.customButton').click();
    }
  };

});
