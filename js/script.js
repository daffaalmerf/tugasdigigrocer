var userEmail = document.getElementById("userEmail");

function loginValidation(){

    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(e){

    var inputEmail = document.getElementById("loginEmail").value;
    var inputPassword = document.getElementById("loginPassword").value;

    var errorEmail = document.getElementById("loginEmailValidation");
    var errorPassword = document.getElementById("loginPasswordValidation");

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!(inputEmail.match(emailPattern))){
        errorEmail.innerHTML = "Invalid e-mail address";
        e.preventDefault();
    } else if (inputEmail.length < 1) {
        errorEmail.innerHTML = "Fill your e-mail address";
        e.preventDefault();
    } else {
        errorEmail.innerHTML = "";
    }

    if(inputPassword.length < 8 || inputPassword.length > 12){
        errorPassword.innerHTML = "Invalid password";
        e.preventDefault();
    } else {
        errorPassword.innerHTML = "";
    }

});
};

function registerValidation(){

    var registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function(e){

    var inputName = document.getElementById("name").value;
    var inputEmail = document.getElementById("email").value;
    var inputPassword = document.getElementById("password").value;
    var inputConfirm = document.getElementById("confirmPassword").value;

    var errorName = document.getElementById("regNameValidation");
    var errorEmail = document.getElementById("regEmailValidation");
    var errorPassword = document.getElementById("regPasswordValidation");
    var errorConfirm = document.getElementById("regConfirmPasswordValidation");

    const alphabeticPattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!(inputName.match(alphabeticPattern))){
        errorName.innerHTML = "Invalid name";
        e.preventDefault();
    } else if (inputName.length < 1){
        errorName.innerHTML = "Fill your name";
        e.preventDefault();
    } else {
        errorName.innerHTML = "";
    }

    if(!(inputEmail.match(emailPattern))){
        errorEmail.innerHTML = "Invalid e-mail address";
        e.preventDefault();
    } else if (inputEmail.length < 1) {
        errorEmail.innerHTML = "Fill your e-mail address";
        e.preventDefault();
    } else {
        errorEmail.innerHTML = "";
    }

    if(inputPassword.length < 8 || inputPassword.length > 12){
        errorPassword.innerHTML = "Invalid password";
        e.preventDefault();
    } else {
        errorPassword.innerHTML = "";
    }

    if(inputPassword != inputConfirm){
        errorConfirm.innerHTML = "Invalid confirmation";
        e.preventDefault();
    } else {
        errorConfirm.innerHTML = "";
    }

});
};
