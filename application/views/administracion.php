<script type="text/javascript" src="<?php  echo base_url(); ?>js/menu.js"></script>
<div>
<p>menu</p>
</div>
<div id='menu'class="collapse navbar-collapse">
	
</div>

<section>
          <div class="row">
              <div class="page-header col-xs-12 col-sm-12 col-md-12 ">
                <div class="tab-content">
                  
                  <div class="tab-pane poto" id="slider">
                 
                  </div>



                  <div class="tab-pane" id="nosotros">
                    <h2>Contacto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit 
                    repellendus nulla accusamus, veniam cum saepe voluptate maxime dolorem magnam asperiores 
                    hic laboriosam cupiditate id nesciunt, vitae quis, dolor ad.
                    </p>
                  </div>
                  <div class="tab-pane" id="experiencia">
                    <h2>Portafolio</small></h2>
                    <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. 
                    Try some responsive-range viewport sizes to see it in action. Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Vitae voluptates necessitatibus fuga aperiam mollitia, tempora, 
                    nam temporibus rerum voluptatum sint, pariatur maiores adipisci vero dolor ab nesciunt. Quos, labore provident! 

                 
                    </p>
                  </div>
                   <div class="tab-pane" id="servicios">
                    <h2>Contacto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit 
                    repellendus nulla accusamus, veniam cum saepe voluptate maxime dolorem magnam asperiores 
                    hic laboriosam cupiditate id nesciunt, vitae quis, dolor ad.
                    </p>
                  </div>
                  <div class="tab-pane" id="contactos">
                    <h2>Portafolio</small></h2>
                    <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. 
                    Try some responsive-range viewport sizes to see it in action. Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Vitae voluptates necessitatibus fuga aperiam mollitia, tempora, 
                    nam temporibus rerum voluptatum sint, pariatur maiores adipisci vero dolor ab nesciunt. Quos, labore provident! 

                 
                    </p>
                  </div>
                   <div class="tab-pane" id="footer">
                    <form>
                    	<label>Calle:</label>
                    	<input type="text" id="calle" name="calle" value="">
                    	<label>numero:</label>
                    	<input type="text" id="numero" name="numero" value="">
                    	<label>telefono:</label>
                    	<input type="text" id="telefono" name="telefono" value="">
                    	<label>email:</label>
                    	<input type="text" id="email" name="email" value="">
                    	<button id="btnfooter">Guardar cambios!</button>
                    </form>
                  </div>
            



                </div>
             </div>
          </div><!--/row-->
    
   <div ng-include="angular_view/slider.html"></div>

</section>
