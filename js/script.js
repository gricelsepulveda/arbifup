/*APARECER MENU MOVIL*/
$(document).ready(function(){
    $(".cnt_btn").click(function(){
        if($(".login").css("display")=='none')
        {
            $(".login").css({"display":'block'});
            $(".login_administrador").css({"border-bottom-left-radius":'0.25rem'});
            $(".login_administrador").css({"border-bottom-right-radius":'0.25rem'});
            $(".login_administrador").css({"border-bottom":'solid 2px #ffffff'});
        }
        else
        {
            $(".login").css({"display":'none'});
            $(".login_administrador").css({"border-bottom-left-radius":'0rem'});
            $(".login_administrador").css({"border-bottom-right-radius":'0rem'});
            $(".login_administrador").css({"border-bottom":'none'});
        }
    });
    /*ADMINISTRACION*/
    $(".drop_btn").click(function(){
        if($(".main_menu").css("height")=='0px')
        {
            $(".main_menu").css({"height":'260px'});
            $(".redes_sociales").fadeOut("fast");
            $('.main_menu li').css({fontSize: '0.8rem', padding: '1rem 0.5rem 0.25rem 0.55rem', textTransform: 'uppercase'});
            $(".main_menu").mouseleave(function(){
                $(".main_menu").css({"height":'0px'});
            });
        }
        else
        {
            $(".main_menu").css({"height":'0px'});
            $('.main_menu li').css({fontSize: '0.8rem', padding: '1rem 0.5rem 0.25rem 0.55rem', textTransform: 'uppercase'});
            $(".redes_sociales").fadeIn("fast");
        }
    });

    /*FADE IN PRODUCTO 1*/
    $("#figura_1").mouseover(function(){
        $("#sobre_1").css({"display":'block'});
    });
    $("#figura_1").mouseleave(function(){
        $("#sobre_1").fadeOut("fast");
    });
    /*FADE IN PRODUCTO 2*/
    $("#figura_2").mouseover(function(){
        $("#sobre_2").css({"display":'block'});
    });
    $("#figura_2").mouseleave(function(){
        $("#sobre_2").fadeOut("fast");
    });
    /*FADE IN PRODUCTO 3*/
    $("#figura_3").mouseover(function(){
        $("#sobre_3").css({"display":'block'});
    });
    $("#figura_3").mouseleave(function(){
        $("#sobre_3").fadeOut("fast");
    });
    /*FADE IN PRODUCTO 4*/
    $("#figura_4").mouseover(function(){
        $("#sobre_4").css({"display":'block'});
    });
    $("#figura_4").mouseleave(function(){
        $("#sobre_4").fadeOut("fast");
    });
    /*ACTIVAR MENU*/
    $("nav.main_menu > ul > a > li").click(function(){
        $("nav.main_menu > ul > a > li").removeClass("act");
        $(this).addClass("act");
    });
    /*ACTIVAR TAB*/
    $(".cnt_btn_4").click(function(){
        $(".cnt_btn_4").removeClass("act_2");
        $(this).addClass("act_2");
    });
    /*ACTIVAR IMAGEN PRODUCTO*/
    $(".producto_abierto > li").click(function(){
        $(".producto_abierto > li").removeClass("p_a_activo");
        $(this).addClass("p_a_activo");
    });
    /*ABRIR Y CERRAR COTIZAR*/
     $(".btn_cotizar").click(function(){
        $(".cnt_cotizar").fadeIn("slow");
    });
    $(".enviar_cotizacion").click(function(){
        $(".cnt_cotizar").fadeOut("fast");
    });
    $(".cerrar_cotizar").click(function(){
        $(".cnt_cotizar").fadeOut("fast");
    });
    /*ABRIR IMAGEN EN PESTAÑA NUEVA*/
   $("a.externo").click(function() {
      url = $(this).attr("href");
      window.open(url, '_blank');
      return false;
   });
    /*ABRIR CATALOGO EN PESTAÑA NUEVA*/
   $("a.urlcatalogo").click(function() {
      url = $(this).attr("href");
      window.open(url, '_blank');
      return false;
   });
    /*ACTIVAR DROP*/
    $(".drop_btn").click(function(){
        if($(".drop_btn").css("backgroundColor")=='rgb(255, 255, 255)')
            {
                $(".drop_btn").css({
                    "backgroundColor":'rgb(0, 0, 0)'
                });
                $(".drop_btn > span").css({
                    "color":'rgb(255, 255, 255)'
                });
            }
        else{
                $(".drop_btn").css({
                    "backgroundColor":'rgb(255, 255, 255)'
                });
                $(".drop_btn > span").css({
                    "color":'rgb(229, 192, 23)'
                });
            }
    });
});


/*banner 1*/
var statuss = 2;

setInterval(function()
{
    Sliderr(statuss);
    if(statuss == 3) statuss = 1;
    else statuss+= 1;
}, 5000);

function Sliderr(statuss)
{
    if(statuss==1)
    {
        $("#banner_1b").fadeOut("fast");
        $("#banner_1c").fadeOut("fast");
        $("#control_banner_1a").addClass("activa_control");
        $("#control_banner_1c").removeClass("activa_control");
        $("#control_banner_1b").removeClass("activa_control");
        $('.banner_ocultador1').animate({ top: "0px" }, 500);
        $("#banner_1b").fadeIn("fast");
        $("#banner_1c").fadeIn("fast");
    }

    if(statuss==2)
    {
        $("#control_banner_1b").addClass("activa_control");
        $("#control_banner_1a").removeClass("activa_control");
        $("#control_banner_1c").removeClass("activa_control");
        $('.banner_ocultador1').animate({ top: "-405px" }, 500);
    }

    if(statuss==3)
    {
        $("#control_banner_1c").addClass("activa_control");
        $("#control_banner_1b").removeClass("activa_control");
        $("#control_banner_1a").removeClass("activa_control");
        $('.banner_ocultador1').animate({ top: "-810px" }, 500);
    }
}

function ChangeSliderr(statuss)
{
    Sliderr(statuss);
}


/*banner 2*/
var estado = 2;

setInterval(function()
{
    Slider(estado);
    if(estado == 3) estado = 1;
    else estado+= 1;
}, 4000);

function Slider(estado)
{
    if(estado==1)
    {
        $("#banner_2b").fadeOut("fast");
        $("#banner_2c").fadeOut("fast");
        $("#control_banner_2a").addClass("activa_control");
        $("#control_banner_2c").removeClass("activa_control");
        $("#control_banner_2b").removeClass("activa_control");
        $('.banner_ocultador2').animate({ top: "0px" }, 500);
        $("#banner_2b").fadeIn("fast");
        $("#banner_2c").fadeIn("fast");
    }

    if(estado==2)
    {
        $("#control_banner_2b").addClass("activa_control");
        $("#control_banner_2a").removeClass("activa_control");
        $("#control_banner_2c").removeClass("activa_control");
        $('.banner_ocultador2').animate({ top: "-480px" }, 500);
    }

    if(estado==3)
    {
        $("#control_banner_2c").addClass("activa_control");
        $("#control_banner_2b").removeClass("activa_control");
        $("#control_banner_2a").removeClass("activa_control");
        $('.banner_ocultador2').animate({ top: "-960px" }, 500);
    }
}

function ChangeSlider(estado)
{
    Slider(estado);
}
/*banner 3*/
var etapa = 2;

setInterval(function()
{
    marcas(etapa);
    if(etapa == 2) etapa = 1;
    else etapa+= 1;
}, 3000);

function marcas(etapa)
{
    if(etapa==1)
    {
        $("#marca_5").fadeOut("fast");
        $("#marca_6").fadeOut("fast");
        $("#marca_7").fadeOut("fast");
        $("#marca_8").fadeOut("fast");
        $('.ocultador_marca').animate({ top: "2px" }, 500);
        $("#marca_5").fadeIn("fast");
        $("#marca_6").fadeIn("fast");
        $("#marca_7").fadeIn("fast");
        $("#marca_8").fadeIn("fast");
    }

    if(etapa==2)
    {
        var windowWidth = window.innerWidth;
            if(windowWidth > '991') {
                $('.ocultador_marca').animate({ top: "-1050px" }, 500);
            }
            if(windowWidth < '991'){
                $('.ocultador_marca').animate({ top: "-348px" }, 500);
            }
    }

}
/*scroll*/
var windowWidth = window.innerWidth;
if(windowWidth > '991') {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.main_menu li').css({fontSize: '0.8rem', padding: '1rem 0.5rem 0.25rem 0.55rem', textTransform: 'uppercase'});
            $(".redes_sociales").fadeOut("fast");
        }
        else {
            $('.main_menu li').css({fontSize: '0.9rem', padding: '2rem 1rem 0.25rem 1rem', textTransform: 'capitalize'});
            $(".redes_sociales").fadeIn("fast");
        }
    });
}
/*
/*refrescar pagina en movil
var w = 0;
$( window ).load( function(){
    w = $( window ).width();
});
$( window ).resize( function(){
    if( w != $( window ).width() ){
        console.log('window resized..');
        this.location.reload(false);
        w = $( window ).width();
        delete w;
    }
})*/

/*enviar formulario */
    function submitformContacto()
        {
            document.forms["enviar_contacto"].method="POST";
            document.forms["enviar_contacto"].submit();
        }
