new WOW().init();
$(document).ready(function(){
  bgImageTotal=13;
  randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
  imgPath=('images/home_page/'+ randomNumber +'.JPG');
  $('body').css('background-image', ('url("'+imgPath+'")'));
  $('body').css('background-position', 'center center');
  $('body').css('background-repeat', 'no-repeat');
  $('body').css('background-size', 'cover');
  $('.tooltipped').tooltip({delay: 50});
});
