$(function(){
    $("#user-menu").hide();
    $("#icon-button").click(function() {
        $("#user-menu").slideToggle("fast");
    });

    if(localStorage.getItem('fname') != null){
        
        let fname= localStorage.getItem('fname');
        let lname = localStorage.getItem('lname');
        let tcolor = localStorage.getItem('tcolor');
        let bcolor = localStorage.getItem('bcolor');

        $("#account").html("Welcome " + fname);

        $("#icon-button").css({"background-color": bcolor, "color": tcolor});

        $("#icon-button").html(fname.charAt(0) + lname.charAt(0));
    }
});