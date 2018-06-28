function objetoAjax(){
                var xmlhttp = false;
                try {
                    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {

                    try {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (E) {
                        xmlhttp = false; }
                }

                if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
                  xmlhttp = new XMLHttpRequest();
                }
                return xmlhttp;
            }
            
            function enviarDatos(){

            //Recogemos los valores introducimos en los campos de texto
            if( $('#checkbox0').prop('checked') )checkbox0 = document.formulario.checkbox0.value;
            if( $('#checkbox1').prop('checked') )checkbox1 = document.formulario.checkbox1.value;
            if( $('#checkbox2').prop('checked') )checkbox2 = document.formulario.checkbox2.value;
            if( $('#checkbox3').prop('checked') )checkbox3 = document.formulario.checkbox3.value;
            if( $('#checkbox4').prop('checked') )checkbox4 = document.formulario.checkbox4.value;
            if( $('#checkbox5').prop('checked') )checkbox5 = document.formulario.checkbox5.value;
            if( $('#checkbox6').prop('checked') )checkbox6 = document.formulario.checkbox6.value;
            if( $('#checkbox7').prop('checked') )checkbox7 = document.formulario.checkbox7.value;
            if( $('#checkbox8').prop('checked') )checkbox8 = document.formulario.checkbox8.value;
            if( $('#checkbox9').prop('checked') )checkbox9 = document.formulario.checkbox9.value;
            if( $('#checkbox10').prop('checked') )checkbox10 = document.formulario.checkbox10.value;
            if( $('#checkbox11').prop('checked') )checkbox11 = document.formulario.checkbox11.value;
            if( $('#checkbox12').prop('checked') )checkbox12 = document.formulario.checkbox12.value;
            if( $('#checkbox13').prop('checked') )checkbox13 = document.formulario.checkbox13.value;
            if( $('#checkbox14').prop('checked') )checkbox14 = document.formulario.checkbox14.value;
            if( $('#checkbox15').prop('checked') )checkbox15 = document.formulario.checkbox15.value;

             //Aquí será donde se mostrará el resultado
            resultado = document.getElementById('resultado');

            //instanciamos el objetoAjax
            ajax = objetoAjax();

            //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
            ajax.open("POST", "emergencia.php", true);

            //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
            ajax.onreadystatechange = function() {

                 //Cuando se completa la petición, mostrará los resultados
                if (ajax.readyState == 4){

                    //El método responseText() contiene el texto de nuestro 'consultar.php'. Por ejemplo, cualquier texto que mostremos por un 'echo'
                    resultado.innerHTML = (ajax.responseText)
                }
            }

            //Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
            ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

            //enviamos las variables a 'consulta.php'
            ajax.send("&checkbox0="+checkbox0+"&checkbox1="+checkbox1+"&checkbox2="+checkbox2+"&checkbox3="+checkbox3+"&checkbox4="+checkbox4+"&checkbox5="+checkbox5+"&checkbox6="+checkbox6+"&checkbox7="+checkbox7+"&checkbox8="+checkbox8+"&checkbox9="+checkbox9+"&checkbox10="+checkbox10+"&checkbox11="+checkbox11+"&checkbox12="+checkbox12+"&checkbox13="+checkbox13+"&checkbox14="+checkbox14+"&checkbox15="+checkbox15)

    }

            
    $(document).ready(function(){
		$("#boton").on( "click", function() {
			$('#codigo').show('slow'); //muestro mediante id
            $('#nuevo').show('slow'); //muestro mediante id
			$('#boton').hide('slow'); //muestro mediante clase
		 });
        
        $('#recargar').click(function() {
            location.reload();
        });
	});