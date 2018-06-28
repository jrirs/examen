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
            inicial = document.formulario.inicial.value;

             //Aquí será donde se mostrará el resultado
            resultadoi = document.getElementById('resultadoi');

            //instanciamos el objetoAjax
            ajax = objetoAjax();

            //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
            ajax.open("POST", "aprendizaje_asserta.php", true);

            //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
            ajax.onreadystatechange = function() {

                 //Cuando se completa la petición, mostrará los resultados
                if (ajax.readyState == 4){

                    //El método responseText() contiene el texto de nuestro 'consultar.php'. Por ejemplo, cualquier texto que mostremos por un 'echo'
                    resultadoi.innerHTML = (ajax.responseText)
                }
            }

            //Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
            ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

            //enviamos las variables a 'consulta.php'
            ajax.send("&inicial="+inicial)

            }

            function enviarDatos2(){

            //Recogemos los valores introducimos en los campos de texto
            final = document.formulario.final.value;

             //Aquí será donde se mostrará el resultado
            resultado = document.getElementById('resultado');

            //instanciamos el objetoAjax
            ajax = objetoAjax();

            //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
            ajax.open("POST", "aprendizaje_asserta.php", true);

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
            ajax.send("&final="+final)

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