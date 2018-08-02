$(document).ready(function(){
	$("#Enviar").click(function(){
		var nombre = $("#Nombre").val();
		var correo = $("#Correo").val();
		var mensaje = $("#Mensaje").val();
		if (jQuery.trim(nombre).length > 0) {
					if (jQuery.trim(correo).length > 0) {
						if (jQuery.trim(mensaje).length > 0) {
							alert("Datos cargados");
						} else {
							alert("Por favor, escriba un mensaje");
						}
					} else {
						alert("Por favor, escriba su correo");
					}
			} else {
				alert("Por favor, escriba su nombre");
			}
	});
});