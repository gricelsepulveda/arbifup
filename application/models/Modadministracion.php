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
        

        


    }
?>
