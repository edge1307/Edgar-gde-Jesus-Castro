$(document).ready(function() {
    $("#btnEnviar").click(function(event) {
        var id, nombre;
          
        nombre = $("#txtNombre").val();
        alertify.success("Hola" + id + "-" + nombre)
    });
    $("#btnNuevo").click(function(event) {
        $("#txtId").val("");
        $("#txtNombre").val("");
        $("#txtNombre").focus();
        alertify.error("Campo Limpio")
    });
    $("#btnwarning").click(function(event) {
        alertify.log("Mensaje Log")
    });
    $("#btnprimary").click(function(event) {
        alertify.confirm("¿Deseas Salir?", function(respuesta) {
            if (respuesta) {
                alertify.success("Desea Salir")
            } else {
                alertify.error("Cancelado")
            }
        });
    });
});