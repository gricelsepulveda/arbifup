<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Noticias extends CI_Controller {

	
	public function index()
	{
		
		$datos['sesion'] = $this->session->userdata('logged_in');

		if($datos['sesion']['estado']==FALSE){

		$this->load->view('estaticos/navegacion',$datos);
		$this->load->view('noticias');
		$this->load->view('estaticos/footer2');

		}
		else{

		redirect(base_url().'administracion',$datos);
				
			}
	}
	
	}