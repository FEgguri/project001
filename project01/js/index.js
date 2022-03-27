  //header
             
  $(window).on('scroll',function(){
            
    if( $('.first-pg ').offset().top < $(window).scrollTop()){
        
        $('.header-container').slideUp();    
    }else{
        $('.header-container').slideDown();    
    }
    //contents fade in - out
    let scrollFade = function(n){
        if($(n).offset().top < $(window).scrollTop()+$(window).height()){
        $(n).addClass('active');
    }else{
        $(n).removeClass('active');
    }
    }
    scrollFade('.subject1 > .subcontent > h2')
    scrollFade('.subject1 > .subcontent > ul > li')
    scrollFade('.subject1 > .subcontent1 > h2')
    scrollFade('.subject1 > .subcontent1 > ul > li')
    scrollFade('.subject2 > .sub2-1 > ul > li')
   
   
})


  
    