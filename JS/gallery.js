$('.img').click(function(e){
  var focus = $(e.target);
  focus.toggleClass('focus').siblings().removeClass('focus');
});
