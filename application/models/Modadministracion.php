<?php
	
	class Modadministracion extends CI_Model
	{

		function __construct()
    	{
        	// Call the Model constructor
        	parent::__construct();
    	}
    	function menu()
    	{
            $query = $this->db->get('menu');
            $datos = $query->result_array();
            
            return $datos;
    	}
        function traer_nosotros_portada()
        {
            $query = $this->db->get('nos_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function modificar_nosotros_portada($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('nos_portada', $data);
        }
       function modificar_nosotros_portada2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('nos_portada', $data);
        }
        function traer_nosotros()
        {
            $query = $this->db->get('nosotros');
            $datos = $query->result_array();
            
            return $datos;
        }
          function modificar_nosotros($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('nosotros', $data);
        }
       function modificar_nosotros2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('nosotros', $data);
        }
          function traer_directiva()
        {
            $query = $this->db->get('directiva');
            $datos = $query->result_array();
            
            return $datos;
        }
        function update_directiva($directiva)
        {
            $data = array(
                'titulo' => $directiva[0],
                'descripcion' => $directiva[1]
                );
            $this->db->where('id', 1);
            $this->db->update('directiva', $data);
            echo "ok";
            return "ok";
        }
        function modificar_miembros($titulo,$desc,$file,$tab)
        {
            $data = array(
                'nombre' => $titulo,
                'cargo' => $desc,
                'imagen' => $file,
                'tab' => $tab
                );
            $this->db->where('id', $tab);
            $this->db->update('miembros', $data); 

            echo "ok";
        }
        function modificar_miembros2($nombre,$desc,$tab)
        {
            $data = array(
                'nombre' => $nombre,
                'cargo' => $desc,
         
                'tab' => $tab
                );
            $this->db->where('id', $tab);
            $this->db->update('miembros', $data); 

        }
        function traer_miembros($tab){

            $this->db->where('tab',$tab);
            $query = $this->db->get('miembros');
            $datos = $query->result_array();
            
            return $datos;
        }
        function modificar_slider($titulo,$desc,$file,$tab)
        {
            $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file,
                'tab' => $tab
                );
            $this->db->where('id', $tab);
            $this->db->update('slider', $data); 

            echo "ok";
        }
        function modificar_slider2($nombre,$desc,$tab)
        {
            $data = array(
                'titulo' => $nombre,
                'descripcion' => $desc,
                'tab' => $tab
                );
            $this->db->where('id', $tab);
            $this->db->update('slider', $data); 
        }
        function traer_slider($tab){

            $this->db->where('tab',$tab);
            $query = $this->db->get('slider');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_noticias_portada(){
            $query = $this->db->get('not_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function modificar_noticias_portada($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('not_portada', $data);
        }
       function modificar_noticias_portada2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('not_portada', $data);
        }
        function traer_categorias(){
            $query = $this->db->get('categoria');
            $datos = $query->result_array();
            
            return $datos;
        }
        function crear_noticias($datos){
            $imagen = strtotime("now");
            $fecha = date("d-m-20y");
            $data = array(
               'fecha' => $fecha,
               'titulo' => $datos[0],
               'descripcion' => $datos[1],
               'imagen' => $imagen,
               'link' => $datos[2],
               'categoria' => $datos[3],
             
            );
            $this->db->insert('noticia', $data);
            $proid = $this->db->insert_id();
            //$this->db->where('id', 1);
            //$this->db->update('footer', $data);
            $estado = true;
            if($estado == true)
            {
                $nombre = "imagen.jpg";
                for ($i=1; $i < 5; $i++) {

                      $img = array(
                        'imagen' => $nombre,
                        'codimagen' => $imagen,
                        'tab' => $i
                        );
                        $this->db->insert('not_imagenes', $img);
                }
            }
            return $proid;
        }
        function traer_img_noticias($datos){

            $this->db->where('id', $datos[0]);
            $this->db->select('imagen');
            $query = $this->db->get('noticia');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_not_imagenes($datos){
        
            $this->db->where('tab', $datos[0]);
            $this->db->where('codimagen', $datos[1]);
            $this->db->select('imagen');
            $query = $this->db->get('not_imagenes');
            $datos = $query->result_array();
            
            return $datos;
        }
        function cargar_img($img,$file,$tab)
        {
            $data = array(
                'imagen' => $file,
                );
            $this->db->where('tab', $tab);
            $this->db->where('codimagen', $img);
            $this->db->update('not_imagenes', $data); 
            
        }
        function modificar_servicios_portada($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('serv_portada', $data);
        }
       function modificar_servicios_portada2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('serv_portada', $data);
        }
        function traer_servicios_portada()
        {
            $query = $this->db->get('serv_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_noticias($datos){

            //$this->db->select('nombre');
            $q = "select n.*, c.nombre as cat from noticia n join categoria c on n.categoria = c.id where n.titulo = '".$datos[0]."' or n.categoria='".$datos[1]."' ";
            $query1 = $this->db->query($q);
            $dat = $query1->result_array();

            return $dat;
        }
         function traer_noticias_img($datos){

            $this->db->where('tab', $datos[0]);
            $this->db->where('codimagen', $datos[1]);
            $this->db->select('imagen');
            $query = $this->db->get('not_imagenes');
            $datos = $query->result_array();

            return $datos;
        }
        function eliminar_noticia($datos){
            $this->db->where('id',$datos[0]);
            $this->db->delete('noticia');

            $estado = true;
            if($estado == true)
            {
                $this->db->where('codimagen',$datos[1]);
                $this->db->delete('not_imagenes');
            }
            return "ok";
        }
        function actualizar_noticia($datos){
            $cod = $datos[0];
            if ($datos[4] > 0) {
                 $data = array(
               
               'categoria' => $datos[4],
               'imagen' => $datos[5],
               'titulo' => $datos[1],
               'descripcion' => $datos[2],
               'link' => $datos[3],
               
                 );
            }else
            {
                 $data = array(
               
             
                'categoria' => $datos[4],
               'imagen' => $datos[5],
               'titulo' => $datos[1],
               'descripcion' => $datos[2],
               'link' => $datos[3],
               
            );
            }
           
            $this->db->where('id',$cod);
            $this->db->update('noticia',$data);
            return "update";
        }
        function modificar_media_portada($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('med_portada', $data);
        }
       function modificar_media_portada2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('med_portada', $data);
        }
        function traer_media_portada()
        {
            $query = $this->db->get('med_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_media_album()
        {
            $query = $this->db->get('media_album');
            $datos = $query->result_array();
            
            return $datos;
        }
        function crear_album($datos)
        {
            $imagen = strtotime("now");
            $fecha = date("d-m-20y");
            $data = array(
               'fecha' => $fecha,
               'titulo' => $datos[0],
               'imagen' => $imagen,
               'cantidad' => "2",
            );
            $this->db->insert('media_album', $data);
            $proid = $this->db->insert_id();

            return $proid;
        }
        function traer_media_cantidad($datos)
        {
      
            $this->db->where('id', $datos);
            $query = $this->db->get('media_album');
            $datos = $query->result_array();
            
            return $datos;
        }
        function modificar_media_imagen($imagen,$desc,$tab,$file)
        {
             $data = array(
                'codimagen' => $imagen,
                'imagen' => $file,
                'descripcion' => $desc,
                'tab' => $tab
                );
             $this->db->insert('media_album_imagenes', $data);
             echo "$file";
        }
       function modificar_media_imagen2($imagen,$desc,$tab)
        {
              $data = array(
                'codimagen' => $imagen,
                'descripcion' => $desc,
                'tab' => $tab
                );
             $this->db->insert('media_album_imagenes', $data);
        }
        function modificar_designaciones_portada($titulo,$desc,$file)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc,
                'imagen' => $file
                );
            
            $this->db->where('id', 1);
            $this->db->update('desig_portada', $data);
        }
       function modificar_designaciones_portada2($titulo,$desc)
        {
             $data = array(
                'titulo' => $titulo,
                'descripcion' => $desc
                );
            
            $this->db->where('id', 1);
            $this->db->update('desig_portada', $data);
        }
        function traer_designacion_portada()
        {
            $query = $this->db->get('desig_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function modificar_designaciones($titulo,$desc,$file)
        {
            $fecha = date("d-m-20y");
             $hora = date("H:i:s");
             $data = array(
                'fecha' => $fecha,
                'hora' => $hora,
                'titulo' => $titulo,
                'descripcion' => $desc,
                'archivo' => $file
                );
            $this->db->insert('desginaciones', $data);
        }
       function modificar_designaciones2($titulo,$desc)
        {
             $fecha = date("d-m-20y");
             $hora = date("H:i:s");
             $data = array(
                'fecha' => $fecha,
                'hora' => $hora,
                'titulo' => $titulo,
                'descripcion' => $desc,

                );
            $this->db->insert('desginaciones', $data);
        }
        function traer_servicios()
        {
            $query = $this->db->get('servicios');
            $datos = $query->result_array();
            
            return $datos;
        }
         function eliminar_servicio($datos){
            $this->db->where('id',$datos[0]);
            $this->db->delete('servicios');

            return "ok";
        }
        function actualizar_servicio($datos){

             $data = array(
                'estado' => $datos[1],

                );
            
            $this->db->where('id', $datos[0]);
            $this->db->update('servicios', $data);

            return "ok";
        }
       
   

    }   
?>
