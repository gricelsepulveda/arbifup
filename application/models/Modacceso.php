<?php
	
	class Modacceso extends CI_Model
	{
	
		
		function __construct()
    	{
        	// Call the Model constructor
        	parent::__construct();
    	}
    	function login($param)
    	{
    		
			$this->db->select('id,user,pass');
			$this->db->where('user',$param['user']);
			$this->db->where('pass',$param['pass']);
			$query = $this->db->get('usuario');
			
			$datos = array("usuario"=>$query->result_array(), "total"=>$query->num_rows());
			
			return $datos;
    	}


    }
?>
