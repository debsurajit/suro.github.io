$(document).ready(function(){

  $(".backtotop").click(function(){
    $('html,body').animate({
         scrollTop: 0},'slow');
  });

   $(".down").click(function(){
    $('html,body').animate({
         scrollTop: $(".part2").height()},'slow');
  });
  $(".searchdrop").hide();

   $(".search").click(function(){
        $(".searchdrop").slideToggle();  
     });

   $(".msg").hide();
   $(".email").click(function(){
        $(".msg").show();  
     });
  
});
