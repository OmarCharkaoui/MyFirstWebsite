
$(function(){
    'use strict';

    /* calculate height of slider to be 100% veiwport*/
    
    var slider = $(window).height(), /* Height of veiwport window */
    topbar = $('.top-bar').innerHeight(), /* Height of top-bar navbar  */
    navbar = $('.navbar').innerHeight(); /* height of navbar  */
    

    /* $('.owl-carousel ').height( slider - (navbar + topbar)); */  /* height of slider-section  */
    

    
  /* start owlCarousel */
  
    $(".owl-carousel").owlCarousel({
      items:1,
      nav:true,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    /* End owlcarousel */
    

  /* Add fixed top and some effect when scroling */
    $(window).scroll(function(){
      if( $(window).scrollTop() > 500)
      {
        $("nav").addClass('fixed-top stickyNavbar');
     
      }
      else {
        $("nav").removeClass('fixed-top stickyNavbar');
      }
    });

    /* add actived class when click to li in ul */

    $('.Featured-Work .list li').on('click',function(){

      $(this).addClass('actived').siblings().removeClass('actived');

        /* filter when click to list choises  */
     if(  $(this).attr('data-class') == ".all" ){

       $('.parentshuffl .row .col-sm').css("opacity",1); 
       } 
      else {
        $('.parentshuffl .row .col-sm').css("opacity",".08"); 
        $($(this).attr('data-class')).parent().css('opacity',1);
      } 
    });
    /*scrolling on Click nav */

    $(".js-scroll-work").click(function(){

        $("html, body").animate({ scrollTop: ($(".js--scroll-work").offset().top)-100 },1000)

    });
    $(".js-scroll-blog").click(function(){

        $("html, body").animate({ scrollTop: ($(".js--scroll-blog").offset().top)-100 },1000)

    });
    $(".js-scroll-contact").click(function(){

        $("html, body").animate({ scrollTop: ($(".js--scroll-contact").offset().top)-110 },1000)

    });
    $(".js-scroll-about").click(function(){

        $("html, body").animate({ scrollTop: ($(".js--scroll-about").offset().top)-110 },1000)

    });
    
    /* active link when click to navigation  active */
    $(".ul-custom li a").on("click",function(){

      $(this).parent().addClass("active").siblings().removeClass("active");

    });
    /* animation with waypoint */
    $('.js-wp-1').waypoint(function(direction){

      $('.js-wp-1').addClass("animated lightSpeedIn");
      
    },{ offset:'60%'} );

    $('.js-wp-2').waypoint(function(direction){

      $('.js-wp-2').addClass("animated fadeInUp");
      
    },{ offset:'70%'} );

    $('.js-wp-3').waypoint(function(direction){

      $('.js-wp-3').addClass("animated shake");
      
    } ,{ offset:'80%'}  );

    $('.js-wp-4').waypoint(function(direction){

      $('.js-wp-4').addClass("animated slideInDown");

      
         /* plugin count To  */
    $(".count").countTo();
      
    } ,{ offset:'70%'}  );

 

  }); 
  