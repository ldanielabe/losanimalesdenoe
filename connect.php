<?php
   $connect=mysqli_connect("localhost","root","");
   $selectDb = mysqli_select_db($connect,"veterinaria");


    error_reporting(0);
    if(!$connect) {
        console.log("Error conexion BD");
    } else {

        $nombre=$_POST['nomD'];
        $correo=$_POST['email'];
        $celular=$_POST['cel'];
        $nombreA=$_POST['nomA'];
        $raza=$_POST['raza'];
        $tipo=$_POST['tipo'];
        $edad=$_POST['edad'];
        $tipoA=$_POST['tipoA'];
        $imagen=$_POST['subirImagen'];


/*IMAGEN*/
       
try{
   
    if(isset($_FILES["image"])){
    //echo "<pre>";
    //var_dump($_FILES);
    //echo "</pre>";
    $supportImages=["image/jpg","image/jpeg","image/gif","image/png"];
    $image=$_FILES["image"];
        if(in_array($image[type],$supportImages)){
            $tmp_name=$image["tmp_name"];
            $name=md5($image["name"]).".jpg";
            $path="img/$name";
            move_uploaded_file($tmp_name,$path);
            echo $name;
        }else{
            throw new Exception("Error, sube una imagen valida");
            
        }

    }else{
        throw new Exception("Error");
    }
}catch(Throwable $th){
    echo $th->getMessage();
}
    

/*INSERT*/


        $sql="INSERT INTO dueno (nombre,correo,celular) VALUES ('$nombre',
                                        '$correo',
                                        '$celular')";

        if ($connect->query($sql) === true) {
            $last_id = $connect->insert_id;
           
            $sql2="INSERT INTO animal (nombre, edad, raza, tipo, id_dueno,animal,imagen) VALUES ('$nombreA',
                                        '$edad',
                                        '$raza',
                                        '$tipo',
                                        '$last_id',
                                        '$tipoA',
                                        '$path')";
            if ($connect->query($sql2) === true) {
                console.log("Datos guardados correctamente");
                  // header("Location: http://localhost/Emisoft/conter-ajax/index.html");
            } else {
                console.log("Error");
            }
        } 
    }
?>