<?php
//Funciones utilizadas

function CompruebaQueNoEstenVacios($array){
    
    foreach ($array as $clave => $valor) {
        if(empty($valor)){
            return false;
        }
    }
    return true;
}

function CompruebaSQL ($array) {
    
 $patron="/(from|select|insert|delete|where|drop table|show tables|,|'|#|\*|--|\\\\)/i";
    
    foreach ($array as $clave => $valor) {
        if(preg_match($patron,$valor)){
            return false;
        }
    }
    return true;
}

function EnviaServicioREST($array,$type) {
    

$ch = curl_init();

$headers = ["Content-Type: application/json"];


curl_setopt($ch, CURLOPT_URL,"http://localhost/final/rest_service/register/");
    


curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($array));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$server_output = curl_exec ($ch);

$server_output = json_decode($server_output,true);
    
curl_close ($ch);

console_log( $server_output);
$stringNumber = 200;
$status = $server_output['status'];
    
    if ($status==$stringNumber) {
        $id=$server_output['id'];
        $remember = $array["remember"];
        doCookie($id,$remember);
        return true;

    } else { 
        $error=$server_output['error'];
        return false;

    }
}
function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}
function doCookie($cookie_id,$remember){
    
    if(!isset($_COOKIE["user_id"])) {
    
        if(remember == 1){
          setcookie("user_id", $cookie_id, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day  
        }else{
            setcookie("user_id", $cookie_id, time() + (1000), "/"); // 86400 = 1 day
        }
        

    }
}
?>