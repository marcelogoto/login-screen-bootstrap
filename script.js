var numberOfAttempts = 3;

function validateForm() {
    
    var name = document.getElementById("username").value;
    
    var password = document.getElementById("password").value;
    
    if (name == "") {
        numberOfAttempts--;
        
        if(numberOfAttempts== 0){
            displayMaximumAttemptsMessageAndLockSendButton();
            return false;
        }
        
        alert("Name must be filled out. You have "+numberOfAttempts+" attempt(s) left" );
    }
    else if(password == ""){
        numberOfAttempts--;
        
        if(numberOfAttempts == 0){
            displayMaximumAttemptsMessageAndLockSendButton();
            return false;
        } 
        
        alert("Password must be filled out. You have "+numberOfAttempts+" attempt(s) left"); 
    }
    else{
        checkIfCredentialsAreValid(numberOfAttempts, name, password);
    }
}

function displayMaximumAttemptsMessageAndLockSendButton(){
    alert("You reached maximum number of attempts. Try again later"); 
    document.getElementById("send").disabled = true;
}

function checkIfCredentialsAreValid(attempts, username, password){
    if (username == "marcelo" && password == "goto"){
        alert("Login successfull!");
        window.location = "dashboard.html";
    }
    else{
        
        numberOfAttempts--;
        
        if(attempts == 1){
            displayMaximumAttemptsMessageAndLockSendButton();
            return false;
        }
        
        alert("Wrong credentials. Try again. You have "+numberOfAttempts+" attempt(s) left");
    }
}