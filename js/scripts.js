$(document).ready(function(){
    /*ACTIVAR MENU*/
    $(".navi > ul > a > li").click(function(){
        $(".navi > ul > a > li").removeClass('navegacion_activo');
        $(this).addClass('navegacion_activo');
    });
    /*ACTIVAR CATEGORIA*/
    $(".noticia > ul > li").click(function(){
    	$('.caret').fadeOut(0);
        $(".noticia > ul > li").removeAttr("id", 'noticia_activo');
        $(this).attr("id", 'noticia_activo').find('.caret').fadeIn("fast");
    });
    /*ACTIVAR DROP*/
    $(".btn_menu").click(function(){
        if($(".navegacion ul").css("height")=='28px')
            {
                $(".navegacion ul").css({"height":'auto'});
            }
        else{
                $(".navegacion ul").css({"height":''});
            }
    });
    /*ACTIVAR LINK FOOTER*/
    $(".enlaces_footer > li").click(function(){
        $(".enlaces_footer > li").removeClass("act4");
        $(this).addClass("act4");
    });
    /*DELAY TWITTER */
    
});