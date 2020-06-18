// document.addEventListener('DOMContentLoaded',function(){
//   var Timer = function(talkStartTime,talkEndTime,endMessage,outputDestination){
//     this.talkStartTime = talkStartTime
//     this.talkEndTime = talkEndTime
//     this.endMessage = endMessage
//     this.outputDestination = outputDestination//タイマーを表示する対象要素
//   };

//   Timer.prototype.countDown = function(){
//     var talkStartTime = new Date(this.talkStartTime);
//     var talkEndTime = new Date(this.talkEndTime);
//     var oneDay = 24 * 60 * 60 * 1000;
//     var countDownTimer = document.getElementById(this.outputDestination);
//     var endMessage = this.endMessage;
//     var currentTimeCD = new Date();
//     var untilStartTime = new Date();
//     var untilFinishTime = new Date();
//     var d = 0;
//     var h = 0;
//     var m = 0;
//     var s = 0;

//     setInterval(calculateTime, 1000);

//     function calculateTime() {
//       currentTimeCD = new Date();
//       untilStartTime = talkStartTime - currentTimeCD;
//       untilFinishTime = talkEndTime - currentTimeCD;

//       if (currentTimeCD < talkStartTime) {
//         d = Math.floor(untilStartTime / oneDay);
//         h = Math.floor((untilStartTime % oneDay) / (60 * 60 * 1000));
//         m = Math.floor((untilStartTime % oneDay) / (60 * 1000)) % 60;
//         s = Math.floor((untilStartTime % oneDay) / 1000) % 60 % 60;
//       } else {
//         d = Math.floor(untilFinishTime / oneDay);
//         h = Math.floor((untilFinishTime % oneDay) / (60 * 60 * 1000));
//         m = Math.floor((untilFinishTime % oneDay) / (60 * 1000)) % 60;
//         s = Math.floor((untilFinishTime % oneDay) / 1000) % 60 % 60;
//       }

//       showTime();
//     }

//     function showTime() {
//       if (currentTimeCD < talkStartTime) {
//         countDownTimer.innerHTML
//         = '開始まで' + d + '日' + h + '時間' + m + '分' + s + '秒';
//       } else if (currentTimeCD >= talkStartTime && currentTimeCD <= talkEndTime) {
//         countDownTimer.innerHTML
//         = 'あと' + d + '日' + h + '時間' + m + '分' + s + '秒' + 'で終了';
//       } else {
//         countDownTimer.innerHTML = endMessage;
//       }
//     }
//   }
  
//   var myTimer = new Timer('2020/6/11 00:00:00', '2100/12/31 23:59:59', '終了！', 'timer');
//   myTimer.countDown();
// },false)


let diff = 0;

let startTime = new Date();
let endTime = new Date(Date.now() + gon.room * 60000 );
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
  let ms = Math.floor(diff % times / 10) % 100
  if (diff > 0) {
    $("#Timer").text(hour + '時間' + min + '分' + sec + '秒' + ms);
    setTimeout(function () {
      countDown(diff);
    });
  } else {
    //終了した時のテキスト
    $("#Timer").text('終了しました！');
  }
}