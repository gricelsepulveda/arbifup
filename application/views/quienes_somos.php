	<div ng-controller="pagQuienesController">
	<!--QUIENES SOMOS-->
	<!--Modal descripción árbitro-->
	<div class="modal fade" tabindex="-1" role="dialog" id="arbitro">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h3 class="text-center">Nombre del árbitro</h3>
				</div>
				<div class="modal-body">
					<div>
						<img src="img/relleno_02.jpg">
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue elementum lorem, et aliquam est ornare eget. Proin condimentum facilisis purus vitae facilisis...
					</p>
				</div>
			</div>
		</div>
	</div>
	<!--Portada-->
	<div class="center-block secciones" data-uk-scrollspy="{cls:'uk-animation-scale-up'}" >
		<div id="carousel-banner" class="carousel slide carousel-fade" data-ride="carousel">
			<!--Imagenes-->
			<div class="carousel-inner portada" role="listbox">
				<div class="item active" id="item_1"
					style="
					background-image: url(files/{{quienes[0].imagen}});
					filter: blur(3px);
					-webkit-filter: blur(3px);
					-moz-filter: blur(3px);
					-o-filter: blur(3px);
					-ms-filter: blur(3px);
					">
				</div>
				<div class="carousel-caption cap">
					<h3>{{quienes[0].titulo}}</h3>
					<div class="bloque">
						<p>
							{{quienes[0].descripcion}}
						</p>
					</div>
				</div>
			 </div>
		</div>
		<hr>
		<div class="center-block text-center">
			<h2>Quienes somos</h2>
		</div>
	</div>
	<!--Modulos-->
	<div class="wrapper" ng-controller="pagQuienesController">
		<!--Nosotros-->
		<section class="nosotros" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
			<div class="tab">Nosotros</div>
			<div class="contenedor">
				<div  class="row no_margen cuerpo">
					<article>
						<h3>{{somos[0].titulo}}</h3>
						<p>
							{{somos[0].descripcion}}
						</p>
					</article>
					<figure>
						<img src="files/{{somos[0].imagen}}">
					</figure>
				</div>
			</div>
		</section>
		<!--Directiva-->
		<section class="directiva" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
			<div class="tab">Directiva</div>
			<div class="contenedor">
				<div  class="row no_margen cuerpo">
					<article>
						<h3>{{directiva[0].titulo}}</h3>
						<p>
							{{directiva[0].descripcion}} 
						</p>
					</article>
					<figure ng-repeat="datos in miembros"><!--IMAGEN 1-->
						<div>
							<img src="files/{{datos.imagen}}">
						</div>
						<span data-toggle="modal" data-target="#arbitro">{{datos.nombre}}</span>
						<span>{{datos.cargo}}</span>
					</figure>
					
				</div>
			</div>
		</section>
		<!--Cuerpo de arbitros-->
		<section class="arbitros" data-uk-scrollspy="{cls:'uk-animation-scale-down'}">
			<div class="tab">Cuerpo de árbitros</div>
			<div class="contenedor">
				<div  class="row no_margen cuerpo">
					<article>
						<h3>Conoce a todo el cuerpo de árbitros que representamos</h3>
						<button class="der_abajo">Conócelos</button>
					</article>
				</div>
			</div>
		</section>
	</div>
	</div>