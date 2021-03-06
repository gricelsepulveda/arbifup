        <!--Formulario jugada-->
    <div class="modal fade" tabindex="-1" role="dialog" id="jugada">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="text-center">Envía tu pregunta</h3>
                </div>
                <div class="modal-body">
                    <form class="text-center">
                        <input type="text" name="user" placeholder="Su nombre"><br/>
                        <input type="email" name="email" placeholder="Su correo"><br/>
                        <textarea rows="5" name="message" placeholder="Descripción del aviso"></textarea>
                        <br/>
                        <button class="ambos_abajo">Enviar</button>
                    </form>
                    <p>
                        <span>Nota:</span>
                        Las preguntas enviadas no se publican de manera inmediata. Son revisados previamente por la administración.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--Banner-->
    <div class="center-block" data-uk-scrollspy="{cls:'uk-animation-scale-up'}">
        <div id="carousel-banner" class="carousel slide carousel-fade" data-ride="carousel">
            <!--Circulos-->
            <ol class="carousel-indicators">
                <li data-target="#carousel-banner" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-banner" data-slide-to="1"></li>
                <li data-target="#carousel-banner" data-slide-to="2"></li>
                <li data-target="#carousel-banner" data-slide-to="3"></li>
            </ol>
            <hr>
            <!--Imagenes-->
            <div class="carousel-inner" role="listbox" ng-controller="pagSliderController">
                <div class="item active" id="item_1" style="background-image: url(files/{{slider[0].imagen}});">
                    <a href="#gol">
                        <div class="carousel-caption cap">
                            <h3>{{slider[0].titulo}}</h3>
                            <div class="bloque">
                                <p>
                                    {{slider[0].descripcion}}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="item" id="item_2" style="background-image: url(files/{{slider[1].imagen}});">
                    <a href="#gol">
                        <div class="carousel-caption cap">
                            <h3>{{slider[1].titulo }}</h3>
                            <div class="bloque">
                                <p>
                                    {{slider[1].descripcion}}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="item" id="item_3" style="background-image: url(files/{{slider[2].imagen}});">
                    <a href="#gol">
                        <div class="carousel-caption cap">
                            <h3>{{slider[2].titulo}}</h3>
                            <div class="bloque">
                                <p>
                                    {{slider[2].descripcion}}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="item" id="item_4" style="background-image: url(files/{{slider[3].imagen}});">
                    <a href="#gol">
                        <div class="carousel-caption cap">
                            <h3>{{slider[3].titulo}}</h3>
                            <div class="bloque">
                                <p>
                                   {{slider[3].descripcion | limitTo: 120 }}{{"  "+"..."}}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
             </div>
            <!-- Controles-->
            <a class="left carousel-control" data-target="#carousel-banner" role="button" data-slide="prev">
                <div class="cnt_mid izq">
                    <i class="fa fa-angle-left"></i>
                </div>
            </a>
            <a class="right carousel-control" data-target="#carousel-banner" role="button" data-slide="next">
                <div class="cnt_mid der">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
    </div>
    <!--Modulos-->
    <div class="wrapper">
        <!--Noticias recientes-->
        <section class="noticia" data-uk-scrollspy="{cls:'uk-animation-scale-down'}" ng-controller="pagNoticiasController">
            <div class="tab">Noticias recientes</div>
            <ul>
                <li ng-click="arbifup()" id="noticia_activo"><div class="caret caret_on"></div>Arbifup</li>
                <li ng-click="futbol()"><div class="caret"></div>Futbol</li>
                <li><div class="caret"></div>Desarrollo</li>
                <li><div class="caret"></div>Editorial</li>
            </ul>
            <div class="contenedor">
                <div  class="row no_margen cuerpo">
                    <figure>
                        <img src="files/{{noticias[0].img}}">
                    </figure>
                    <article>
                        <h6>{{noticias[0].fecha }}</h6>
                        <h3>{{noticias[0].titulo}}</h3>
                        <p>
                        {{noticias[0].descripcion | limitTo: 250}}{{"  "+"..."}}
                        </p>
                        <button class="boton_amarillo der_abajo">Leer más</button>
                        <hr>
                        <h6>Más antiguas</h6>
                        <h5>{{noticias[1].descripcion | limitTo: 120 }}{{"  "+"..."}}<a href=""><i class="fa fa-angle-right"><span>ver</span></i></a></h5>
                        <br>
                        <h5>{{noticias[2].descripcion | limitTo: 120 }}{{"  "+"..."}}<a href=""><i class="fa fa-angle-right"><span>ver</span></i></a></h5>
                    </article>
                </div>
            </div>
        </section>
        <!--Asignaciones-->
        <section class="designaciones" data-uk-scrollspy="{cls:'uk-animation-scale-down'}" ng-controller="pagDesignacionesController">
            <div class="tab">Designación vigente</div>
            <div class="contenedor">
                <div  class="row no_margen cuerpo">
                    <article>
                        <h3>Designación {{designaciones[0].fecha}}</h3>
                        <p>
                            A continuación podrás descargar la designación vigente en formato pdf:
                        </p>
                        <i class="fa fa-file-pdf-o"></i>
                        <a class="boton_amarillo der_abajo" href="storage/{{designaciones[0].archivo}}" target="_blank" download="Designacion {{designaciones[0].fecha}}">Descargar</a>
                    </article>
                </div>
            </div>
        </section>
        <!--Análisis jugadas-->
        <section class="jugadas" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
            <div class="tab">Análisis de jugadas</div>
            <div class="contenedor">
                <div  class="row no_margen cuerpo">
                    <figure>
                        <div>
                            <span>1</span>
                        </div>
                    </figure>
                    <article>
                        <h3>Pregunta nº11</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue elementum lorem, et aliquam est ornare eget.
                        </p>
                        <button class="boton_amarillo der_abajo">Leer más</button>
                    </article>
                    <figure>
                        <div>
                            <span>2</span>
                        </div>
                    </figure>
                    <article>
                        <h3>Respuesta a pregunta nº10</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue elementum lorem, et aliquam est ornare eget.
                        </p>
                        <button class="boton_amarillo der_abajo">Leer más</button>
                    </article>
                    <nav>
                        <hr>
                        <button>Ver todas</button>
                        <button data-toggle="modal" data-target="#jugada">Enviar Pregunta</button>
                    </nav>
                </div>
            </div>
        </section>
        <!--Video destacado-->
        <section class="video" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
            <div class="tab">Video destacado</div>
            <div class="contenedor">
                <div  class="cuerpo">
                    <div class="embed-container">
                        <iframe src='https://www.youtube.com/embed/hQjXlja1g_U' frameborder='0' allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        <!--Marcas-->
        <section class="marcas" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
            <div class="tab">Marcas</div>
            <div class="contenedor">
                <div class="cuerpo">
                    <div class="carousell">
                        <h3>Están con nosotros:</h3>
                        <div class="cnt_carousell">
                            <div class="holder">
                                <a target="_blank" href="http://www.nintendo.com/es_LA">
                                    <img src="img/publicidad_1.png"/>
                                </a>
                                <a target="_blank" href="http://www.hasbro.com/es-cl/">
                                    <img src="img/publicidad_2.png"/>
                                </a>
                                <a target="_blank" href="http://www.nintendo.com/es_LA">
                                    <img src="img/publicidad_1.png"/>
                                </a>
                                <a target="_blank" href="http://www.hasbro.com/es-cl/">
                                    <img src="img/publicidad_2.png"/>
                                </a>
                                <a target="_blank" href="http://www.nintendo.com/es_LA">
                                    <img src="img/publicidad_1.png"/>
                                </a>
                                <a target="_blank" href="http://www.hasbro.com/es-cl/">
                                    <img src="img/publicidad_2.png"/>
                                </a>
                                <a target="_blank" href="http://www.nintendo.com/es_LA">
                                    <img src="img/publicidad_1.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Redes sociales-->
        <section class="social" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
            <div class="tab">Redes sociales</div>
            <div class="contenedor">
                <div  class="row no_margen cuerpo">
                    <section class="facebook">
                        <div>
                            <div>
                                <figure>
                                    <a target="_blank" href="https://www.facebook.com/enlacedeejemplo">
                                        <img src="img/facebook.svg">
                                    </a>
                                </figure>
                                <article>
                                    <p>
                                        ¡Síguenos en nuestro fanpage!
                                        <a target="_blank" href="https://www.facebook.com/enlacedeejemplo">
                                            https://www.facebook.com/enlacedeejemplo
                                        </a>
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section class="twitter">
                        <div>
                            <div>
                                <figure>
                                    <div>
                                        <div>
                                            <img src="img/twitter.svg">
                                        </div>
                                    </div>
                                </figure>
                                <article>
                                    <div>
                                        <div>
                                            <p id="tweet"></p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
