<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo extends CI_Controller {

	
	public function index()
	{
		
		$datos['sesion'] = $this->session->userdata('logged_in');

		if($datos['sesion']['estado']==FALSE){

		$this->load->view('estaticos/header',$datos);
		$this->load->view('catalogo');
		$this->load->view('estaticos/footer');

		}
		else{

		redirect(base_url().'administracion',$datos);
				
			}
	}
	public function login()
	{
		$this->load->model('Modacceso');
		$datos = $this->Modacceso->login(@$_POST);
		if(@$_POST['pass']!="")
		{
			$pass = $_POST['pass'];
		}
		else
		{
			$pass = str_replace('.','', @$_POST['user']);
			$pass = str_replace('-','', $pass);
		}
		//echo $datos['usuario'][0]['nombre'];
		if($datos['total']>0)
		{
			$estado = true;
			$data = $datos['usuario'][0];
			$resp = array("estado"=>$estado, "datos"=>$data);
			//crear la session del usuar
			//cargar log
			$this->session->set_userdata('logged_in', $resp);
			
		}
		else
		{
		 	$estado = false; $data = array("demo"=>1); 
		}
			
		echo json_encode($estado);	
		
	}
	public function ajax()
	{
			//$this->usuario->verificar();
		$this->load->model('Modadministracion');
		$caso = $_POST['case'];
			
		switch($caso)
		{
			case 1:
				$datos = $this->Modadministracion->arriendos();
				echo json_encode($datos);
			break;
			case 2:
				$datos = $this->Modadministracion->venta();
				echo json_encode($datos);
			break;
			case 3:
				$datos = $this->Modadministracion->productos($_POST['datos']);
				echo json_encode($datos);
			break;
			case 4:
				$datos = $this->Modadministracion->arriendo_precio($_POST['datos']);
				echo json_encode($datos);
			break;
			case 5:
				$datos = $this->Modadministracion->venta_precio($_POST['datos']);
				echo json_encode($datos);
			break;
			case 6:
				$datos = $this->Modadministracion->traer_categoria();
				echo json_encode($datos);
			break;
			case 7:
				$datos = $this->Modadministracion->traer_destacado();
				echo json_encode($datos);
			break;
		}
	}
}
