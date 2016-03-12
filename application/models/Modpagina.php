<?php
	
	class Modpagina extends CI_Model
	{

		function __construct()
    	{
        	// Call the Model constructor
        	parent::__construct();
    	}

        function traer_slider()
        {
            $query = $this->db->get('slider');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_noticias_arbifup()
        {
            $this->db->select('n.*, i.imagen as img');
            $this->db->join('not_imagenes i', 'n.imagen = i.codimagen');
            $this->db->where('n.categoria',2);
            $this->db->order_by('n.id','desc');
            $this->db->group_by('n.id');
            $query = $this->db->get('noticia n');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_noticias_futbol()
        {
            $this->db->select('n.*, i.imagen as img');
            $this->db->join('not_imagenes i', 'n.imagen = i.codimagen');
            $this->db->where('n.categoria',1);
            $this->db->order_by('n.id','desc');
            $this->db->group_by('n.id');
            $query = $this->db->get('noticia n');
            $datos = $query->result_array();
            
            return $datos;
        }
         function traer_portada_quienes()
        {
            $query = $this->db->get('nos_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
         function traer_nosotros()
        {
            $query = $this->db->get('nosotros');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_directiva()
        {
            $query = $this->db->get('directiva');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_miembros()
        {
            $query = $this->db->get('miembros');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_todo_noticias()
        {
             $this->db->select('n.*, i.imagen as img , c.nombre');
            $this->db->join('not_imagenes i', 'n.imagen = i.codimagen');
            $this->db->join('categoria c', 'n.categoria = c.id');
            $this->db->order_by('n.id','desc');
            $this->db->group_by('n.id');
            $query = $this->db->get('noticia n');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_noticias_portada()
        {
            $query = $this->db->get('not_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_designaciones()
        {
            $this->db->order_by('fecha,hora','desc');
            $query = $this->db->get('desginaciones');
            $datos = $query->result_array();
            
            return $datos;
        }
        function traer_desig_portada()
        {
            $query = $this->db->get('desig_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
         function traer_servicios_portada()
        {
            $query = $this->db->get('serv_portada');
            $datos = $query->result_array();
            
            return $datos;
        }
         function agregar_servicios($user,$producto,$descripcion,$fono,$correo,$web,$file)
        {
            $fecha = date("d-m-20y");
             $data = array(
                'fecha' => $fecha,
                'user' => $user,
                'producto' => $producto,
                'descripcion' => $descripcion,
                'fono' => $fono,
                'correo' => $correo,
                'web' => $web,
                'estado' => 'espera',
                'imagen' => $file
                );
             $this->db->insert('servicios', $data);
             echo "$file";
        }
        function traer_servicios()
        {
            $query = $this->db->get('servicios');
            $datos = $query->result_array();
            
            return $datos;
        }
    	
   

    }   
?>
