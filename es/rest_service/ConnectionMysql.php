<?php

Class ConnectionMysql {
	
	
    private $user_name="root";
    private $user_password="";
    private $bbdd_name="rest";
    private $bbdd_host="localhost";
    
    private function getConnection(){
        
        $connection = new PDO("mysql:dbname=$this->bbdd_name;host=$this->bbdd_host", $this->user_name, $this->user_password);
        
        return $connection;
    
    }
            
	public function getUserId($name,$password){
        
        $pdo= $this->getConnection();
        
		$sql= 'SELECT * FROM user WHERE name="'.$name.'"and password="'.$password.'"';
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        $userid;
        
        foreach($result as $row){
            $userid= array("id"=>$row["id"]);
        }
    

		return $userid;
	}
    
    public function createUser($name,$password,$email){
        
        $pdo= $this->getConnection();
        
		$sql= 'SELECT * FROM user WHERE name="'.$name.'"and password="'.$password.'"';
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        $userid= $stmt->lastId();
    

		return $userid;
	}	
}
?>