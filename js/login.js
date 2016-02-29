$(function(){

	//login

	$("#login_admin").on("click",function(){
		
		var estado = validar();
		
		if(estado === true){
		$.ajax({
			beforeSend: function(){
				$("#login").html('Verificando...')
			},
			url: 'http://'+window.location.host+'/arbifup/Welcome/login',
			type: 'post',
			data: "user="+$("#user").val()+"&pass="+$("#pass").val(),
			success:function(respuesta)
			{

				var vector = JSON.parse(respuesta);


					if(vector)
					{
						$("#login").html('Entrando al sistema!')
						var urlfinal = "http://"+window.location.host+"/arbifup/";
						document.location.href = urlfinal;
					}
					else
					{
						$("#logear").css({display:'none'});
						$(".form-access").hide();
						$("#msn").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>×</button>El nombre de usuario: '"+$("#user").val()+"' no esta registrado</div>");
						$(".form-fail").css({display:'inline'});
					}

			}
		});
	}
	else
	{
		$("#nombre").focus()
		$("#msn").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>×</button>Debe completar los datos necesarios!")
	} //fin if

	})
	$("#logmovil").on("click",function(){

		var estado = validar2();
		
		if(estado === true){
		$.ajax({
			beforeSend: function(){
				$("#logmovil").html('Verificando...')
			},
			url: 'http://'+window.location.host+'/barry/Welcome/login',
			type: 'post',
			data: "user="+$("#usuario").val()+"&pass="+$("#contraseña").val(),
			success:function(respuesta)
			{

				var vector = JSON.parse(respuesta);


					if(vector)
					{
						$("#logmovil").html('Entrando al sistema!')
						var urlfinal = "http://"+window.location.host+"/barry/";
						document.location.href = urlfinal;
					}
					else
					{
						$("#logear").css({display:'none'});
						$(".form-access").hide();
						$("#msn").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>×</button>El nombre de usuario: '"+$("#user").val()+"' no esta registrado</div>");
						$(".form-fail").css({display:'inline'});
					}

			}
		});
	}
	else
	{
		$("#nombre").focus()
		$("#msn").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>×</button>Debe completar los datos necesarios!")
	} //fin if

	})

});



function validar()
{
	var user = $("#user").val()
	var pass = $("#pass").val()
	if(user == '' && pass == '')
		{ return false; }
	else if(user == ''){ return false }
	else if(pass == ''){ return false }
	else if(user != '' && pass != ''){ return true }
}
function validar2()
{
	var user = $("#usuario").val()
	var pass = $("#contraseña").val()
	if(user == '' && pass == '')
		{ return false; }
	else if(user == ''){ return false }
	else if(pass == ''){ return false }
	else if(user != '' && pass != ''){ return true }
}
