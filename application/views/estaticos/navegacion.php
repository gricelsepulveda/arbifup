<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"><!--AUX RESPONSIVO-->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>ARBIFUP Asocación de Árbitros Profesionales</title>
    <link rel="shortcut icon" type="image/x-icon" href="<?php  echo base_url(); ?>img/favicon.ico"/><!--FAVICON-->


    <link rel="stylesheet" href="<?php  echo base_url(); ?>css/uikit.css">
    <link rel="stylesheet" href="<?php  echo base_url(); ?>css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php  echo base_url(); ?>css/bootstrap.min.css"><!--BOOTSTRAP CSS-->
    <link rel="stylesheet" href="<?php  echo base_url(); ?>css/estilos.css">

    <script type="text/javascript" src="<?php  echo base_url(); ?>js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="<?php  echo base_url(); ?>js/angular.js"></script>
	<script type="text/javascript" src="<?php  echo base_url(); ?>js/angular-route.js"></script>
	<script type="text/javascript" src="<?php  echo base_url(); ?>js/login.js"></script>
	<script type="text/javascript" src="<?php  echo base_url(); ?>js/uikit.min.js"></script>
	<script type="text/javascript" src="<?php  echo base_url(); ?>js/app/app.js"></script>
    <script type="text/javascript" src="<?php  echo base_url(); ?>js/bootstrap.min.js"></script><!--BOOTSTRAP JS-->
    <script type="text/javascript" src="<?php  echo base_url(); ?>js/scripts.js"></script><!--SCRIPT PERSONALIZADO-->
    <script type="text/javascript" src="<?php  echo base_url(); ?>js/twitter.js"></script><!--SCRIPT PERSONALIZADO-->

    <link rel="stylesheet" href="<?php  echo base_url(); ?>fonts/glyphicons-halflings-regular.eot"><!--FUENTES BOOTSTRAP-->
    <link rel="stylesheet" href="<?php  echo base_url(); ?>fonts/glyphicons-halflings-regular.svg">
    <link rel="stylesheet" href="<?php  echo base_url(); ?>fonts/glyphicons-halflings-regular.ttf">
    <link rel="stylesheet" href="<?php  echo base_url(); ?>fonts/glyphicons-halflings-regular.woff">
    <link rel="stylesheet" href="<?php  echo base_url(); ?>fonts/glyphicons-halflings-regular.woff2">

</head>
<body>

  <div class="titulo">
        <a href="#"><h1>Arbifup&nbsp</h1></a><img src="img/insignia_arbifup.png">
        <h4>Comité de árbitros profesionales A.N.F.P.</h4>
    </div>
    <div class="btn_menu">
        <img src="img/football.svg">
    </div>
    <nav class="navegacion navi">
        <ul>
            <li id="navegacion_menu" class="hidden-lg hidden-md">Menú</li>
            <a href="#gol"><li class="navegacion_activo" id="inicio">Inicio</li></a>
            <a href="#gol"><li id="quienessomos">Quiénes somos</li></a>
            <a href="#gol"><li id="noticias">Noticias</li></a>
            <a href="#gol"><li id="media">Media</li></a>
            <a href="#gol"><li id="servicios">Servicios</li></a>
            <a href="#gol"><li id="designaciones">Designaciones</li></a>
        </ul>
    </nav>
    <!--FIN PERMANENTE-->
    <!--INICIO-->
    <!--Botonera-->
    <nav class="botonera">
        <span data-toggle="modal" data-target="#contacto">contacto</span>
        <a href=""><img src="img/facebook_botonera.svg" title="Nuestro fanpage"></a>
        <a href=""><img src="img/twitter_botonera.svg" title="Síguenos en twitter"></a>
        <img src="img/admin_botonera.svg" title="Panel de autoadminstración" data-toggle="modal" data-target="#login">
    </nav>
    <!--Login administracion-->
    <div class="modal fade" tabindex="-1" role="dialog" id="login">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="text-center">Acceso a panel de administración</h3>
                </div>
                <div class="modal-body">
                    <form class="text-center" id="login_admin">
                        <input type="text" id="user" name="user" placeholder="Escriba usuario"><br/>
                        <input type="password" id="pass" name="pass" placeholder="Proporcione contraseña"><br/>
                        <button  id="login_admin"class="ambos_abajo">I&nbspngresar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--Formulario contacto-->
        <div class="modal fade" tabindex="-1" role="dialog" id="contacto">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="text-center">Escríbanos</h3>
                </div>
                <div class="modal-body">
                    <form class="text-center">
                        <input type="text" name="user" placeholder="Su nombre"><br/>
                        <input type="email" name="email" placeholder="Su correo"><br/>
                        <textarea rows="5" name="message" placeholder="Escriba su mensaje"></textarea>
                        <br/>
                        <button class="ambos_abajo">Enviar</button>
                    </form>
                    <p>
                        <span>Nota:</span>
                        Los mensajes no son contestados de manera inmediata, no obstante son leídos por la administración.Mensajes ofensivos serán considerados spam.
                    </p>
                </div>
            </div>
        </div>
    </div>