<?php

//CONTROLADOR DE LA TRANSFERENCIA DE ARCHIVOS

$servername = "localhost";
$username = "root";
$password = "";
$database = "examen_2";

$conexion = mysqli_connect($servername,$username,$password,$database);

//PREGUNTAR SI FUE PRESIONADO EL BOTON DE SUBMIT
if(isset($_POST["SUBMIT"])){
    //IDENTIFICAR EL ARCHIVO LOCAL
    
    $id = $_POST["id_empleado"];
    $nombre = $_POST["nombre_empleado"];
    $salario = $_POST["salario_empleado"];
    $archivoOrigen = $_FILES["url_foto_empleado"]["tmp_name"]; 
    $archivoDestino = "img/".$_FILES["url_foto_empleado"]["name"];
    //echo "El archivo a subir es: ".$archivoDestino;
    //echo "<br>";
}

//Variable que extraiga la extensión del archivo
$imageFileType = pathinfo($archivoDestino, PATHINFO_EXTENSION);

//Variable que valida que el archivo sea de tipo imagen
$check = getimagesize($archivoOrigen);

//echo "Extensión del archivo: ".$imageFileType."<br>";

if($imageFileType == "png"){
    //si encontró algo, un archivo de tipo imagen
    //echo "El archivo es una imágen <br>";
    //Transfiriendo archivo
    move_uploaded_file($archivoOrigen, $archivoDestino);
    //TRANSFIRIENDO LA URL A LA BD
    $query = "INSERT INTO empleados(id_empleado, nombre_empleado, salario_empleado, url_foto_empleado) VALUES(".$id.",'".$nombre."',".$salario.",'".$archivoDestino."')";
    //echo "Query a ejecutar: ".$query."<br>";
    //EJECUTANDO QUERY DE INSERCION
    if($query_a_ejecutar = mysqli_query($conexion, $query)){
        //echo "Query ejecutado correctamente<br>";
        //header("Refresh:5; url=formulario_Archivo.html");
    }else{
        //echo "Query no ejecutado";
    }
}else{
 $error = "El archivo NO es una imágen <br>";   
}

$consulta = "SELECT * FROM empleados";	
$tabla = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

?>
<html lang="en">
	<head>
		<title>Examen 2</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<script src="js/bootstrap.min.js"></script>
	</head>
	
	<body>
        
		<div class="container py-5">
           
            <div class="row">
                <div class="col-md-12">
                
                    <h1 class="text-center mb-5">Exámen 2° Parcial</h1>
            
                    <hr class="mb-5">
               
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <span class="anchor" id=""></span>

                            <div class="card card-outline-secondary">
                                <div class="card-header">
                                    <h5 class="mb-0">Resultado:</h5>
                                </div>

                                <div class="card-body">

                                    <form action="index.html" class="form" role="form" autocomplete="off" id="" novalidate="" method="POST">
                                        <div align="center">
                                           <?php 
                                            if(isset($error))echo "El archivo NO es una imágen <br>";
                                            echo "<table class='table table-bordered table-striped'>";
                                            echo "<tr>";
                                            echo "<th>Id</th>";
                                            echo "<th>Nombre</th>";
                                            echo "<th>Salario</th>";
                                            echo "<th>Foto</th>";
                                            echo "</tr>";

                                            while ($columna = mysqli_fetch_array( $tabla ))
                                            {
                                                echo "<tr>";
                                                echo "<td>" . $columna['id_empleado'] . "</td>";
                                                echo "<td>" . $columna['nombre_empleado'] . "</td>";
                                                echo "<td>" . $columna['salario_empleado'] . "</td>";
                                                echo "<td><img src='" . $columna['url_foto_empleado'] . "' height='100' width='100'></td>";
                                                echo "</tr>";
                                            }

                                            echo "</table>";
                                            ?>
                                           <br>
                                           <button type="submit" class="btn btn-success btn-lg float-center" id="">Registrar nuevo</button>
                                        </div>
                                    </form>

                                </div>
                                
                            </div>

                        </div>


                    </div>


                </div>
                
            </div>
            
    
        </div>
		
</body>
	
</html>