$(document).ready(function () {

    $("#loginBtn").click(function () {

        var user = $("#username").val();
        var pass = $("#password").val();

        if (user == "" || pass == "") {
            $("#popupLogin").popup("open");
        }
        else {
            $.mobile.changePage("#page2");
        }

    });

});