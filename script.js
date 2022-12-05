$(document).ready(function(){
    //jquery for expand and collapse the sidebar
    $('.menu-btn1').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn1').css("visibility", "hidden");
    });
  
    $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn1').css("visibility", "visible");
    });
  });