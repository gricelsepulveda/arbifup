	<!--DESIGNACIONES-->
	<!--Portada-->
	<div ng-controller="pagDesignacionesController">
	<div class="center-block secciones" data-uk-scrollspy="{cls:'uk-animation-scale-up'}">
		<div id="carousel-banner" class="carousel slide carousel-fade" data-ride="carousel">
			<!--Imagenes-->
			<div class="carousel-inner portada" role="listbox">
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
				</div>
			 </div>
		</div>
		<hr>
		<div class="center-block text-center">
			<h2>Designaciones</h2>
		</div>
	</div>
	<!--Modulos-->
	<div class="wrapper">
		<!--Designacion vigente-->
		<section class="designacion_vigente" data-uk-scrollspy="{cls:'uk-animation-scale-down', repeat: true}">
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
		<!--Designacion vigente-->
		<section class="designaciones_anteriores" data-uk-scrollspy="{cls:'uk-animation-scale-down', repeat: true}">
			<div class="tab">Otras designaciones</div>
			<div class="contenedor">
				<div  class="row no_margen cuerpo">
					<article>
						<h3>Designaciones anteriores</h3>
						<ul >
							<li ng-repeat="datos in designaciones">{{datos.fecha}}<a href="storage/{{datos.archivo}}" target="_blank" download="Designacion {{datos.fecha}}">Descargar</a></li>
					
						</ul>
					</article>
				</div>
			</div>
		</section>
	</div>
	</div>