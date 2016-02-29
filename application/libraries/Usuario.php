<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Usuario {

	/*function __construct()
	{
		$ci = get_instance();
		$usuario = $ci->session->userdata('logged_in');
		if($usuario['datos']['id'] > 0)
		{

		}
		else{
			  redirect('/accesos/logout/', 'refresh');
		}
	}*/

	function data($user)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from usuario where id='$user'");
		return $query->result_array();
	}


	function usuario_completo()
	{
		$ci = get_instance();
		$usuario = $ci->session->userdata('logged_in');

		$ci->db->where('id', $usuario['datos']['id']);
		$query = $ci->db->get('usuario');
		$row = $query->result_array();
		return $row[0];

	}

	function verificar()
	{
		$ci = get_instance();
		$is_logged_in = $ci->session->userdata('logged_in');
		 if(!isset($is_logged_in) || $is_logged_in != true){
		 	if($is_logged_in){
				}
				else{
					redirect(base_url(), 'refresh');
				}
		 }else{
		 	if($is_logged_in){
			}
			else{
				redirect(base_url(), 'refresh');
			}
		 }


	}

	function firmar($user, $fecha, $unix, $accion)
	{
		$CI  =get_instance();
		$d = explode("/",$fecha);

		$datos = array("ip"=>$_SERVER['REMOTE_ADDR'],"accion"=>$accion,"idusuario"=>$user, "dia"=>$d[0], "mes"=>$d[1], "year"=>$d[2], "fecha"=>$unix);

		$CI->db->insert("core_accesos", $datos);

	}
}