<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Quienes extends CI_Controller {

	
	public function index()
	{
		
		$datos['sesion'] = $this->session->userdata('logged_in');

		if($datos['sesion']['estado']==FALSE){

		$this->load->view('estaticos/navegacion',$datos);
		$this->load->view('quienes_somos');
		$this->load->view('estaticos/footer2');

		}
		else{

		redirect(base_url().'administracion',$datos);
				
			}
	}

	function ajax()
	{
		$this->load->model('Modpagina');
		$caso = $_POST['case'];
			
			switch($caso)
			{
				case 1:
					$datos = $this->Modpagina->traer_portada_quienes();
					echo json_encode($datos);
				break;
				case 2:
					$datos = $this->Modpagina->traer_nosotros();
					echo json_encode($datos);
				break;
				case 3:
					$datos = $this->Modpagina->traer_directiva();
					echo json_encode($datos);
				break;
				case 4:
					$datos = $this->Modpagina->traer_miembros();
					echo json_encode($datos);
				break;
	
			}
	}
	
}
