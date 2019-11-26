
//verify only alphabet is used
function AllLetter(alpha) {
    var letters = /^[A-Za-z]+$/;
    if (alpha.value.match(letters)) {
        return true;
    }
    else {
        alert('Please input alphabet characters only');
        return false;
    }
}


//verify only alphabet and numbers are used
function AlphaNumeric(alphanum) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (alphanum.value.match(letters)) {
        return true;
    }
    else {
        alert('Please use only alphanumeric characters');
        alphanum.focus();
        return false;
    }
}

//verify only numbers are used

function AllNumeric(num)
{ 
var numbers = /^[0-9]+$/;
if(num.value.match(numbers))
{
return true;
}
else
{
alert('Please enter numbers only');
num.focus();
return false;
}
}

//verify a country is selected
function CountrySelect(country)
{
if(country.value == "Default")
{
alert('Select your country from the list');
counrty.focus();
return false;
}
else
{
return true;
}
}

//validate email address
function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("Please enter a valid email address!");
email.focus();
return false;
}
}

//confirm email address

function ConfirmEmail() {
    var email = document.getElementById("email").value
    var confirm = document.getElementById("confirm").value
    if(email != confirm) {
        alert('Please enter matching email address.');
    }
}

//1 radio button checked
