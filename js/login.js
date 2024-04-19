$(function(){

    localStorage.clear();

    $( "#login-button").on( "submit" ,function(e) {
        e.preventDefault();
        window.location = "../";

        localStorage.setItem('username', $("#username").val());
        localStorage.setItem('password', $("#password").val());
        


    });
});