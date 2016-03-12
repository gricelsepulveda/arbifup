	<!--SERVICIOS-->
    <!--Formulario producto-->
    <div ng-controller="pagServiciosController">
    <div class="modal fade" tabindex="-1" role="dialog" id="producto">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="text-center">Publica tu producto</h3>
                </div>
                <div class="modal-body">
                    <form class="text-center" name="upload">
                        <input type="text" name="user" ng-model='user' placeholder="Su nombre"><br/>
                        <input type="text" name="producto" ng-model='producto' placeholder="Nombre del producto"><br/>
                        <textarea rows="5" name="descripcion" ng-model='descripcion' placeholder="Descripción del aviso"></textarea>
                        <input type="text" name="fono" ng-model='fono' placeholder="Fono de contacto"><br/>
                        <input type="text" name="correo" ng-model='correo' placeholder="Correo de ventas"><br/>
                        <input type="text" name="web" ng-model='web' placeholder="Sitio web"><br/>
                        <input type="file" uploader-model="file" class="archivo"> 
                        <br/>
                        <button class="ambos_abajo" ng-click="uploadFile()">Enviar</button>
                    </form>
                    <p>
                        <span>Nota:</span>
                        Los productos envíados no se publica de manera inmediata. Son revisados previamente por la administración.
                    </p>
                </div>
            </div>
        </div>
    </div>
	<!--Portada-->
	<div class="center-block secciones" data-uk-scrollspy="{cls:'uk-animation-scale-up'}">
		<div id="carousel-banner" class="carousel slide carousel-fade" data-ride="carousel">
			<!--Imagenes-->
			<div class="carousel-inner portada portada_servicios" role="listbox">
				<div class="item active" id="item_1"
					style="
					background-image: url(files/{{portada[0].imagen}});
					filter: blur(3px);
					-webkit-filter: blur(3px);
					-moz-filter: blur(3px);
					-o-filter: blur(3px);
					-ms-filter: blur(3px);
					">
				</div>
				<div class="carousel-caption cap">
					<h3>{{portada[0].titulo}}</h3>
					<div class="bloque">
						<p>
							{{portada[0].descripcion}}
						</p>
					</div>
					<button class="ambos_abajo" data-toggle="modal" data-target="#producto">Publicar aviso</button>
				</div>
			 </div>
		</div>
		<hr>
		<div class="center-block text-center">
			<h2>Servicios</h2>
		</div>
	</div>
	<!--Modulos-->
	<div class="wrapper">
		<div class="masonry_contenedor">
			<!--Lista de avisos de servicios-->
			<div class="row">
				<section ng-repeat="datos in servicio" class="servicios" ng-hide="{{datos.estado == 'espera' }}">
                    <div class="tab">{{datos.fecha}}</div>
                    <div class="contenedor"> 
                        <div class="row no_margen cuerpo">
                            <article>
                                <h3>{{datos.producto}}</h3>
                                <p>
                                    {{datos.descripcion}}
                                </p>
                            </article>
                            <figure>
                                <img src="files/{{datos.imagen}}">
                            </figure>
                            <nav>
                                <hr>
                                <ul>
                                    <li ng-hide="{{datos.fono == 'undefined' }}">
                                        <i class="fa fa-mobile"></i>
                                        <span>Fono:</span> 
                                        <a href="href=">{{datos.fono}}</a>
                                    </li>
                                    <li ng-hide="{{datos.correo == 'undefined' }}">
                                        <i class="fa fa-envelope-o"></i>
                                        <span>Correo:</span>
                                        <a href="#gol">{{datos.correo}}</a>
                                    </li>
                                    <li ng-hide="{{datos.web == 'undefined' }}">
                                        <i class="fa fa-link"></i>
                                        <span>Web:</span>
                                        <a href="https://{{datos.web}}">{{datos.web}}</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
        
                </section>
			</div>
		</div>
	</div> 
    </div>