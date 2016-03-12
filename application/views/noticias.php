	<!--INICIO-->
	<!--Portada-->
	<div ng-controller="pagNoticiasController">
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
			<h2>Noticias</h2>
		</div>
	</div>	
	<!--Modulos-->
	<div class="wrapper" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
		<!--Listado Noticias-->
		<!--PAGINACION
		<ul class="uk-pagination" data-uk-pagination="{items:100, itemsOnPage:10}">
			<li class="uk-pagination-previous"><a href="">...</a></li>
			<li class="uk-pagination-next"><a href="">...</a></li>
		</ul>-->
		<section class="previa_noticia"  ng-repeat="datos in todo"><!--PREVIA NOTICIA-->
			<div class="tab">{{datos.fecha}}</div>
			<div class="contenedor">
				<div  class="row no_margen cuerpo">
					<figure>
						<img src="files/{{datos.img}}">
					</figure>
					<article>
						<h3>{{datos.titulo}}</h3>
						<p>
						{{datos.descripcion | limitTo: 250 }}{{"  "+"..."}}
						</p>
						<button class="boton_amarillo der_abajo">Leer más</button>
						<hr>
						<h6>Categoría</h6>
						<span class="cat">{{datos.nombre}}</span>
					</article>
				</div>
			</div>
		</section>
		
	</div>

	</div>