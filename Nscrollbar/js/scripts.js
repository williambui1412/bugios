var app = app || {};

var spBreak = 767;

app.init = function () {

  app.isMobile();
  //app.option();


};

app.isMobile = function () {
  $('.button-menu').click(function(){
    $('.sidebar ').toggleClass("visible-mobile");
  });
  $('#closeIconOnMobile').click(function(){
    $('.sidebar ').toggleClass("visible-mobile");
  });
  
};
 
 
 
 
$(function () {

  app.init();

});
