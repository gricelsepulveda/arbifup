<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	
	public function index()
	{
		
		$datos['sesion'] = $this->session->userdata('logged_in');

		if($datos['sesion']['estado']==FALSE){
		$this->load->view('estaticos/navegacion',$datos);
		$this->load->view('welcome_message');
		$this->load->view('estaticos/footer2');
		}
		else{
		redirect(base_url().'administracion');		
		}
	}
	public function login()
	{
		$pass = $_POST['pass'];
		$user = $_POST['user'];

		if($pass != "" && $user !="" )
		{
			$param = array(
			    'user'  => $user,
			    'pass' => $pass,
			    );
			
			$this->load->model('Modacceso');
			$datos = $this->Modacceso->login($param);

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
	public function catalogo()
	{
		redirect(base_url().'catalogo');
		
	}
}

