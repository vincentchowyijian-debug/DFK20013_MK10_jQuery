function semak()
{
    var user = $("#username").val();
    var pass = $("#password").val();

    if(user == "" || pass == "")
    {
        alert("Please fill in Username and Password");
        return false;
    }

    return true;
}