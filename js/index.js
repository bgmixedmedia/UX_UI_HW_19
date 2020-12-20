console.log("Hello world!");

$(document).ready(function(){
    $(".button1").hover(function(){
      $(this).css("background-color", "#D66D69");
      $(this).css("color", "#000000");
    });
    $(".button1").click(function(){
        $(this).css("background-color", "#D94E49");
        $(this).css("color", "#000000");
      });

      $(".button2").hover(function(){
        $(this).css("background-color", "#D66D69");
        $(this).css("color", "#000000");
      });
      $(".button2").click(function(){
          $(this).css("background-color", "#D94E49");
          $(this).css("color", "#000000");
        });
  });