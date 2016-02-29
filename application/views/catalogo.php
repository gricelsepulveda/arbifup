<!DOCTYPE html>
<html lang="en" ng-app="app">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Grúas y transportes Barry - </title>
        <meta name="description" content="Grúas y transportes">
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
        <meta name="author" content="Gricel Sepúlveda">
        <link rel="stylesheet" href="<?php  echo base_url(); ?>css/estilos.css"><!--ESTILOS-->
        <!-- Latest compiled and minified CSS -->
    </head>
    <body class="arriendoyventas" ng-controller="desController">
        <header class="container-fluid inicio_arriendoyventas">
            <div class="row no-gutter">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="center-block text-center">
                        <h2>Catalogo arriendo y ventas</h2>
                        <h4 style="color:#e5c017">Productos destacados:</h4>
                    </div>
                    <figure class="imagen-catalogo" id="figura_1"><!--FIGURA 1-->
                        <img src="img/cuadro.png" class="img-responsive">
                        <img src="files/{{dest[0].img}}" class="producto_sup">
                        <div class="sobre_producto" id="sobre_1">
                            <div class="cnt_btn_2"><!--BOTON-->
                                <div class="btn_normal prod" data-toggle="modal" data-target="#prod" data-cod="{{ dest[0].id }}" ng-click="traer()" >
                                    ver detalle
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="imagen-catalogo" id="figura_2"><!--FIGURA 2-->
                        <img src="img/cuadro.png" class="img-responsive">
                        <img src="files/{{dest[1].img}}" class="producto_sup">
                        <div class="sobre_producto" id="sobre_2">
                            <div class="cnt_btn_2"><!--BOTON-->
                                <div class="btn_normal prod" data-toggle="modal" data-target="#prod" data-cod="{{ dest[1].id }}" ng-click="traer()" >
                                    ver detalle
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="imagen-catalogo" id="figura_3"><!--FIGURA 3-->
                        <img src="img/cuadro.png" class="img-responsive">
                        <img src="files/{{dest[2].img}}" class="producto_sup">
                        <div class="sobre_producto" id="sobre_3">
                            <div class="cnt_btn_2"><!--BOTON-->
                                <div class="btn_normal prod" data-toggle="modal" data-target="#prod" data-cod="{{ dest[2].id }}" ng-click="traer()" >
                                    ver detalle
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="imagen-catalogo" id="figura_4"><!--FIGURA 4-->
                        <img src="img/cuadro.png" class="img-responsive">
                        <img src="files/{{dest[3].img}}" class="producto_sup">
                        <div class="sobre_producto" id="sobre_4">
                            <div class="cnt_btn_2"><!--BOTON-->
                                <div class="btn_normal prod" data-toggle="modal" data-target="#prod" data-cod="{{ dest[3].id }}" ng-click="traer()" >
                                    ver detalle
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div class="center-block text-center catalogo">
                    <img src="img/icon_compromiso.png" class="compromiso">
                    <p>En Barry estamos 100% comprometidos con nuestros contactos online. Nuestro catálogo se actualiza constantemente.</p>
                </div>
            </div>
        </header>
        <div id="prod" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-body modal-body-producto">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h1 class="text-center center-block">{{datos[0].nombre}}</h1><!--NOMBRE-->
                        <ul class="text-center producto_abierto"><!--LISTA DE IMAGENES-->
                            <li id="click"class="p_a_activo" data-href="files/{{ datos[0].img}}" ><img src="files/{{ datos[0].img}}"></li>
                            <li id="click" data-href="files/{{ datos[1].img}}"><img src="files/{{ datos[1].img}}"></li>
                            <li id="click" data-href="files/{{ datos[2].img}}"><img src="files/{{ datos[2].img}}"></li>
                            <li id="click" data-href="files/{{ datos[3].img}}"><img src="files/{{ datos[3].img}}"></li>
                        </ul>
                        <div class="text-center cortina_producto">
                            <figure>
                                <img id="externo" src="files/{{ datos[0].img}}"><!--IMAGEN GRANDE-->
                                <div class="cnt_btn_6"><!--BOTON VER IMAGEN EN PESTAÑA NUEVA-->
                                    <a class="externo" href="files/{{ datos[0].img}}">
                                        <div class="btn_normal">
                                            ampliar imagen
                                        </div>
                                    </a> 
                                </div>
                            </figure>
                        </div>
                        <description class="row descripcion_producto_2">
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <span class="titulos_producto">
                                    Descripción
                                </span>                             
                                <p>
                                {{datos[0].descripcion1}}
                                </p>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 descripcion_producto_3">
                                <span class="titulos_producto">
                                    Más datos:
                                </span> 
                                <p>
                                   {{datos[0].descripcion2}}
                                </p>
                                <a href="{{datos[0].enlace}}">Link externo detalles ></a>
                            </div>
                        </description>
                        <span class="precio">{{datos[0].precio | currency:"$":0 }}</span>
                        <div class="cnt_btn_2 btn_cotizar"><!--BOTON-->
                            <div class="btn_normal">
                                contactar
                            </div>
                        </div>
                    </div>
                    <!--CONTACTO PRODUCTO-->
                    <div class="cnt_cotizar" ng-controller="emailController">
                        <span class="cerrar_cotizar">&times;</span>
                        <h2 class="center-block text-center">COTIZAR</h2> 
                        <form class="form" method="post">
                            <div class="form-group">
                                <label for="inputNombre" id="cod" data-cod="{{datos[0].nombre }}" class="control-label">Nombre:</label>
                                <input type="text" class="form-control" ng-model="nombre" id="inputNombre" name="inputNombre" placeholder="Escriba su nombre o el de su empresa">
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="control-label">Email:</label>
                                <input type="text" class="form-control" ng-model="mail" id="inputEmail" name="inputEmail" placeholder="Proporcione su correo electrónico">
                            </div>
                            <div class="form-group">
                                <label for="inputFono" class="control-label">Fono:</label>
                                <input type="text" class="form-control" ng-model="contacto" id="inputFono" name="inputFono" placeholder="Especifique un número de contacto">
                            </div>
                            <div class="form-group">
                                <label for="inputMensaje" class="control-label">Mensaje:</label>
                                <textarea class="form-control" ng-model="mensaje" rows="4" id="inputMensaje" name="inputMensaje" placeholder="Comentarios adicionales"></textarea>
                            </div>
                        </form>
                        <div class="cnt_btn_2 enviar_cotizacion" ng-click="enviar()">
                            <div class="btn_normal">
                                enviar
                            </div>
                        </div>
                        <div class="center-block text-center postdata">
                            Através de este formulario usted se está contactando con Barry, una vez que recibamos su solicitud de contacto, lo llamaremos en breve.
                        </div>       
                    </div>
                    <!--FIN CONTACTO PRODUCTO-->
                </div>
            </div>
        </div>
        <nav class="container-fluid catalogo">
            <div class="row no-gutter">
              
                <div class="col-xs-6 col-sm-5 col-md-3 col-lg-2">
                    <div class="cnt_btn_4 act_2" id="cnt_btn_4_a"><!--BOTON-->
                    <a href="#/arriendo">
                        <div class="btn_normal">
                            arriendo
                        </div>
                         </a>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-5 col-md-3 col-lg-2">
                    <div class="cnt_btn_4" id="cnt_btn_4_b"><!--BOTON-->
                        <a href="#/venta">
                        <div class="btn_normal">
                            Venta
                        </div>
                         </a>
                    </div>
                </div>
                <div class="col-sm-2 col-md-6 col-lg-8 hidden-xs"></div>
            </div>
        </nav>
        <div class="separador"></div>

        <div ng-view></div>
    </body>
</html>

