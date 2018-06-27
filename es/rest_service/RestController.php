<?php
require_once("ConnectionRestHandler.php");
		
$view = "";
if(isset($_GET["view"]))
	$view = $_GET["view"];

$inputJSON = file_get_contents('php://input');
$input= json_decode( $inputJSON, TRUE ); //convert JSON into array

$requestContentType = $_SERVER["CONTENT_TYPE"];
console_log($input);
switch($view){

	case "login":
		$user_id = new ConnectionRestHandler();
		$user_id->getUserId($input["name"],$input["password"],$requestContentType);
  
            break;
        
    case "register":
		$user_id = new ConnectionRestHandler();
		$user_id->createUser($input["name"],$input["password"],$input["email"],$requestContentType);
  
            break;

	case "send-mail":
		//404 - not found;
       
		break;
}

function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}
?>
