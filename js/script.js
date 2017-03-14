$(document).ready(function(e){
    
    /*Меню Sub-menu*/
    $('.navbar .menu-item>a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').stop().slideToggle();
    });
    /*Меню Sub-menu*/
    
    /*Height*/
    var height = $('.right_sidbar').height();
    $('.left_sidbar').css('min-height',height+75);
    $(window).resize(function(){
        var height = $('.right_sidbar').height();
        $('.left_sidbar').css('min-height',height+75);
    });
    /*Height*/
    
    /*Menu Mobile open*/
    $('.menu_opener').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mob_menu').stop().slideToggle();
    });
    /*Menu Mobile open*/
    
    $('.rad1').click(function(){
        $('.fiz_lico').show();
        $('.yur_lico').hide();
    });
    $('.rad2').click(function(){
        $('.fiz_lico').hide();
        $('.yur_lico').show();
    });
    
    $('.cancel_btn').click(function(e){
        e.preventDefault();
    });
 
});
