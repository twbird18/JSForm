
//submit & validate all fields
function formValidation() {

    var fname = document.registration.first;
    var lname = document.registration.last;
    var address = document.registration.add;
    var cityname = document.registration.city;
    var statename = document.registration.state;
    var zipcode = document.registration.zip;
    var area = document.registration.shorttext;
    var pnum = document.registration.phone;
    var email = document.registration.email;
    var match = document.registration.confirm;


    if (AllLetter(fname) && AllLetter(lname) && AlphaNumeric(address) && AllLetter(cityname) &&
        CountrySelect(statename) && AllNumeric(zipcode) && AllNumeric(area) && AllNumeric(pnum) && 
        ValidateEmail(email) && ConfirmEmail(match)) {
            
        return false;
    }

    else {
       
        return true;

    }
}

//verify only alphabet is used
function AllLetter(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('Please input alphabet characters only');
        return false;
    }
}


//verify only alphabet and numbers are used
function AlphaNumeric(alphanum) {
    var letters = /^[a-zA-Z0-9 ]*$/;
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
country.focus();
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
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;
    if(email != confirm) {
        alert('Please enter matching email address.');
    }
    
}
//count check boxes
     function checkboxes(){
var checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (checked < 2) {
    // there are <2 checked boxes
    alert('please check at least 2 options');
    return false;
} else {
    // there are some checked checkboxes, finish form validation
    formValidation();
    return true;
}}