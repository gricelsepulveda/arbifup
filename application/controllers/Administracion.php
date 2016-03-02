<?php header('Access-Control-Allow-Origin: *');

defined('BASEPATH') OR exit('No direct script access allowed');

class Administracion extends CI_Controller {

	
	public function index()
	{

	   $this->load->view('estaticos/header');
	   $this->load->view('estaticos/menu');
	   $this->load->view('estaticos/footer');
	}
        function nosotros_portada()
        {	
        	$this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            echo $file;
            $titulo = $_POST["titulo"];
            $txt1 = $_POST["txt1"];
         
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modadministracion->modificar_nosotros_portada($titulo,$txt1,$file);
				echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_nosotros_portada2($titulo,$txt1);
                echo json_encode($datos);
            }
        }
         function noticias_portada()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            echo $file;
            $titulo = $_POST["titulo"];
            $txt1 = $_POST["txt1"];

            if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }
         
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modadministracion->modificar_noticias_portada($titulo,$txt1,$file);
                echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_noticias_portada2($titulo,$txt1);
                echo json_encode($datos);
            }
        }
        function nosotros()
        {	
        	$this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            echo $file;
            $titulo = $_POST["titulo"];
            $txt1 = $_POST["txt1"];
         
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
       
                $datos = $this->Modadministracion->modificar_nosotros($titulo,$txt1,$file);
				echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_nosotros2($titulo,$txt1);
                echo json_encode($datos);
            }
        }
        function miembros()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            $desc = $_POST["desc"];
            $tab = $_POST["tab"];
            $nombre = $_POST["name"];

            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                echo $file;
                $datos = $this->Modadministracion->modificar_miembros($nombre,$desc,$file,$tab);
                echo json_encode($datos);
            }else
            {
                echo $file;
                $datos = $this->Modadministracion->modificar_miembros2($nombre,$desc,$tab);
                echo json_encode($datos);
            }
        }
        function slider()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            $desc = $_POST["desc"];
            $tab = $_POST["tab"];
            $nombre = $_POST["name"];

            if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }

            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                echo "cargo".$file;
                $datos = $this->Modadministracion->modificar_slider($nombre,$desc,$file,$tab);
                echo json_encode($datos);
            }else
            {
                echo $file;
                $datos = $this->Modadministracion->modificar_slider2($nombre,$desc,$tab);
                echo json_encode($datos);
            }
        }
         function crearNoticia()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            $img = $_POST["img"];
            $tab = $_POST["tab"];
         
     
            if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                echo $file;
                $datos = $this->Modadministracion->cargar_img($img,$file,$tab);
                echo json_encode($datos);

            }
        }
         function servicio_portada()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            echo $file;
            $titulo = $_POST["titulo"];
            $txt1 = $_POST["txt1"];

            if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }
         
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modadministracion->modificar_servicios_portada($titulo,$txt1,$file);
                echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_servicios_portada2($titulo,$txt1);
                echo json_encode($datos);
            }
        }
        function media_portada()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            echo $file;
            $titulo = $_POST["titulo"];
            $txt1 = $_POST["txt1"];
            
             if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modadministracion->modificar_media_portada($titulo,$txt1,$file);
                echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_media_portada2($titulo,$txt1);
                echo json_encode($datos);
            }
        }
        function media_imagenes()
        {   
            $this->load->model('Modadministracion');
            $_FILES["file"]["name"] = strtotime("now");
            $file = $_FILES["file"]["name"];
            $imagen = $_POST["imagen"];
            $desc = $_POST["desc"];
            $tab = $_POST["tab"];
            
            if(!is_dir("files/"))
            {
            mkdir("files/", 0777);
            }
            else{
                chmod("files/",0777);
            }
            if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$file))
            {
                $datos = $this->Modadministracion->modificar_media_imagen($imagen,$desc,$tab,$file);
                echo json_encode($datos);
            }
            else
            {
                $datos = $this->Modadministracion->modificar_media_imagen2($imagen,$desc,$tab);
                echo json_encode($datos);
            }
        }
		 public function ajax()
		{
			//$this->usuario->verificar();
			$this->load->model('Modadministracion');
			$caso = $_POST['case'];
			
			switch($caso)
			{
				case 1:
					$datos = $this->Modadministracion->menu();
					echo json_encode($datos);
				break;
				case 2:
                    $datos = $this->Modadministracion->traer_nosotros_portada();
                    echo json_encode($datos);
                break;
                case 3:
                    $datos = $this->Modadministracion->traer_nosotros();
                    echo json_encode($datos);
                break;
                case 4:
                    $datos = $this->Modadministracion->traer_directiva();
                    echo json_encode($datos);
                break;
                case 5:
                    $datos = $this->Modadministracion->update_directiva($_POST['directiva']);
                    echo json_encode($datos);
                break;
                 case 6:
                    $datos = $this->Modadministracion->traer_miembros($_POST['miembros']);
                    echo json_encode($datos);
                break;
                case 7:
                    $datos = $this->Modadministracion->traer_slider($_POST['slider']);
                    echo json_encode($datos);
                break;
                case 8:
                    $datos = $this->Modadministracion->traer_noticias_portada();
                    echo json_encode($datos);
                break;
                case 9:
                    $datos = $this->Modadministracion->traer_categorias();
                    echo json_encode($datos);
                break;
                case 10:
                    $datos = $this->Modadministracion->crear_noticias($_POST['noticias']);
                    echo json_encode($datos);
                break;
                case 11:
                    $datos = $this->Modadministracion->traer_img_noticias($_POST['noticia']);
                    echo json_encode($datos);
                break;
                case 12:
                    $datos = $this->Modadministracion->traer_not_imagenes($_POST['codImagen']);
                    echo json_encode($datos);
                break;
                case 13:
                    $datos = $this->Modadministracion->traer_servicios_portada();
                    echo json_encode($datos);
                break;
                 case 14:
                    $datos = $this->Modadministracion->traer_noticias($_POST['datos']);
                    echo json_encode($datos);
                break;
                case 15:
                    $datos = $this->Modadministracion->traer_noticias_img($_POST['datos']);
                    echo json_encode($datos);
                break;
                case 16:
                    $datos = $this->Modadministracion->eliminar_noticia($_POST['datos']);
                    echo json_encode($datos);
                break;
                case 17:
                    $datos = $this->Modadministracion->actualizar_noticia($_POST['datos']);
                    echo json_encode($datos);
                break;
                case 18:
                    $datos = $this->Modadministracion->traer_media_portada();
                    echo json_encode($datos);
                break;
                 case 19:
                    $datos = $this->Modadministracion->traer_media_album();
                    echo json_encode($datos);
                break;
                case 20:
                    $datos = $this->Modadministracion->crear_album($_POST['datos']);
                    echo json_encode($datos);
                break;
                case 21:
                    $datos = $this->Modadministracion->traer_media_cantidad($_POST['datos']);
                    echo json_encode($datos);
                break;
           
             
			}
		}

}
