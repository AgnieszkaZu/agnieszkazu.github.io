$(function(){
  var slideShow = $('.slideShow');
    var slideCount = $(".singeSlide");
  var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    $("slideShow").css({width: slideCount = '00%'});
  
    slideShow.find(".single-slide").each( function(ind){
        $(this).css({
            width: slideWidth + "%",
            marginLeft: ind * slideWidth + "%"
        });
    });
  
    
    
    
    
    
  });