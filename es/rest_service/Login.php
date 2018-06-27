<?php
include "PHPfunctions.php";

$name = $_POST["name"];
$password = $_POST["password"];
$remember = 0;

if(isset($_POST["remember"])){
  $remember =  $_POST["remember"];
}

$array = [
    "name" => $name,
    "password" => $password,
    "remember" => $remember,
];

print_r($array);

if(CompruebaQueNoEstenVacios($array)){
    
    if(CompruebaSQL($array)){
        
        if(EnviaServicioREST($array,"login")){
           
            echo "Everything is ok, the cookie was created, your session is avaliable";
            
        }else {
            
            echo "Ocurrio un error con REST";
        }
        
    }else {
        echo "Los datos contienen sintaxis SQL";
    }
}else {
     echo "Los datos contienen elementos vacios";
}
?>