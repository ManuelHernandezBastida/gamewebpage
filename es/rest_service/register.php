<?php
include "PHPfunctions.php";

$name = json_encode($_POST["name"]);
$password = json_encode($_POST["password"]);
$email = json_encode($_POST["email"]);

$remember= "ok";

$array = [
    "name" => $name,
    "password" => $password,
    "email" => $email,
    "remember" => $remember,
];

if(CompruebaQueNoEstenVacios($array)){
    
    if(CompruebaSQL($array)){
        
        if(EnviaServicioREST($array,"register")){
           
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