<?php
// Datos de conexión
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "online";

// Establecer conexión con la base de datos
$coneccion = mysqli_connect($servidor, $usuario, $clave, $bd);

// Verificar si la conexión fue exitosa
if (!$coneccion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Verificar si se ha enviado el formulario
if (isset($_POST['enviar'])) {
    // Recoger datos del formulario
    $nombre = mysqli_real_escape_string($coneccion, $_POST['Nombre']);
    $correo = mysqli_real_escape_string($coneccion, $_POST['Correo']);
    $comentario = mysqli_real_escape_string($coneccion, $_POST['Comentario']);

    // Consulta para insertar los datos
    $insertar = "INSERT INTO usuario (nombre, correo, comentario) VALUES ('$nombre', '$correo', '$comentario')";

    // Ejecutar la consulta y verificar el resultado
    if (mysqli_query($coneccion, $insertar)) {
        echo "<p>Datos enviados correctamente.</p>";
    } else {
        echo "<p>Error al insertar los datos: " . mysqli_error($coneccion) . "</p>";
    }
}

// Cerrar conexión
mysqli_close($coneccion);
?>

