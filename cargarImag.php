<?php

try{
   
    if(isset($_FILES["image"])){
    //echo "<pre>";
    //var_dump($_FILES);
    //echo "</pre>";
    $supportImages=["image/jpg","image/jpeg","image/gif","image/png"];
    $image=$_FILES["image"];
        if(in_array($image[type],$supportImages)){
            $tmp_name=$image["tmp_name"];
            $name=$image["name"];
            $path="img2/$name";
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

?>