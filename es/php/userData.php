<?php


 
     function getConnection(){
        
        $connection = new PDO("mysql:dbname=rest;host=localhost","root", "");
        
        return $connection;
    
    }
            
	 function getUserData(){
        
        $pdo= getConnection();
        
		$sql= 'SELECT * FROM user WHERE id="1"';
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
    

		return $result;
	}
    
    header('Content-Type: application/json');
    echo json_encode(getUserData());

   

?>