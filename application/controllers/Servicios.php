<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Servicios extends CI_Controller {

	
	public function index()
	{
		
		$datos['sesion'] = $this->session->userdata('logged_in');

		if($datos['sesion']['estado']==FALSE){

		$this->load->view('estaticos/navegacion',$datos);
		$this->load->view('servicios');
		$this->load->view('estaticos/footer2');

		}
		else{

		redirect(base_url().'administracion',$datos);
				
			}
	}
	function productos()
        {	
        	$this->load->model('Modpagina');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            
            $user = $_POST["user"];
            $producto = $_POST["producto"];
            $descripcion = $_POST["descripcion"];
            $fono = $_POST["fono"];
            $correo = $_POST["correo"];
            $web = $_POST["web"];

         
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modpagina->agregar_servicios($user,$producto,$descripcion,$fono,$correo,$web,$file);
				echo json_encode($datos);
            }

        }
	 
	function ajax()
	{
		$this->load->model('Modpagina');
		$caso = $_POST['case'];
			
			switch($caso)
			{
				case 1:
					$datos = $this->Modpagina->traer_servicios_portada();
					echo json_encode($datos);
				break;
				case 2:
					$datos = $this->Modpagina->traer_servicios();
					echo json_encode($datos);
				break;
			
		
	
			}
	}

	
	}