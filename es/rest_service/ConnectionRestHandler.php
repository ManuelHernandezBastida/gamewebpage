<?php
require_once("SimpleRest.php");
require_once("ConnectionMysql.php");
		
class ConnectionRestHandler extends SimpleRest {

	
	public function encodeHtml($responseData) {
	
		$htmlResponse = "<table border='1'>";
		foreach($responseData as $key=>$value) {
    			$htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
		}
		$htmlResponse .= "</table>";
		return $htmlResponse;		
	}
	
	public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData);
		return $jsonResponse;		
	}
	
	public function encodeXml($responseData) {
		// creating object of SimpleXMLElement
		$xml = new SimpleXMLElement('<?xml version="1.0"?><mobile></mobile>');
		foreach($responseData as $key=>$value) {
			$xml->addChild($key, $value);
		}
		return $xml->asXML();
	}
	
	public function getUserId($name,$password,$requestContentType) {

		$connection = new ConnectionMysql();
		$rawData = $connection->getUserId($name,$password);

		if(empty($rawData)) {
			$statusCode = 404;
			$rawData = array('status' => 404);		
		} else {
			$statusCode = 200;
            $rawData += array('status' => 200);	
		}

		//$requestContentType = $_SERVER['HTTP_ACCEPT'];
		$this ->setHttpHeaders($requestContentType, $statusCode);
				
		if(strpos($requestContentType,'application/json') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		} else if(strpos($requestContentType,'text/html') !== false){
			$response = $this->encodeHtml($rawData);
			echo $response;
		} else if(strpos($requestContentType,'application/xml') !== false){
			$response = $this->encodeXml($rawData);
			echo $response;
		}
	}
    
    public function createUser($name,$password,$email,$requestContentType) {

		$connection = new ConnectionMysql();
		$rawData = $connection->createUser($name,$password,$email);

		if(empty($rawData)) {
			$statusCode = 404;
			$rawData = array('status' => 404);		
		} else {
			$statusCode = 200;
            $rawData += array('status' => 200);	
		}

		//$requestContentType = $_SERVER['HTTP_ACCEPT'];
		$this ->setHttpHeaders($requestContentType, $statusCode);
				
		if(strpos($requestContentType,'application/json') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		} else if(strpos($requestContentType,'text/html') !== false){
			$response = $this->encodeHtml($rawData);
			echo $response;
		} else if(strpos($requestContentType,'application/xml') !== false){
			$response = $this->encodeXml($rawData);
			echo $response;
		}
	}
}
?>