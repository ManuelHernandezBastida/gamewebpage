function checkAddress(checkbox)
{
    
    if (checkbox.checked)
    {
        console.log("false");
        document.getElementById("registerButton").disabled = "false";
        
    }else {
        console.log("true");
        document.getElementById("registerButton").disabled = "true";
    }
}

function checkUser(){
    
    var formElement = document.getElementById("login_form");
    var formData = new FormData(formElement);
    var request = new XMLHttpRequest();  

    request.open("POST", "../rest_service/Login.php");  
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
           alert(this.responseText);

        }
    };
    
    request.send(formData);
    
}

function createUser(){
    
    var formElement = document.getElementById("register_form");
    var formData = new FormData(formElement);
    var request = new XMLHttpRequest();  

    request.open("POST", "../rest_service/register.php");  
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
           alert(this.responseText);

        }
    };
    
    request.send(formData);
}