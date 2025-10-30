function validateData(event){
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var server = document.getElementById("server").value;
    var email = document.getElementById("email").value;
    var agree = document.getElementById("agreement");

    if(username.length < 5){
        alert("Username must consist of more than 5 characters");
        return false;
    }if(server.length < 2){
        alert("Server must consist of more than 2 characters");
        return false;
    }if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
        return false;
    }if(!agree.checked){
        alert("You must check the agreement checkbox");
        return false;
    }
    alert("Form successfully submitted!");
    document.getElementById("bugReportForm").reset();
    return true;
}

