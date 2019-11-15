let user = {
    Firstname: "",
    Lastname: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPwd: "",
    Address: "",
    City: "",
    Zip: "",
    Submit: "",
    PhoneNumber: 0,
    Hobbies:[]
};


function submitFunction(){
    user.Firstname = document.getElementById("userFirstname").value;
    user.Lastname = document.getElementById("userLastname").value;
    user.Username = document.getElementById("userUsername").value;
    user.Email = document.getElementById("userEmail").value;
    user.Password = document.getElementById("userPassword").value;
    user.ConfirmPwd = document.getElementById("userConfirmPwd").value;
    user.Address = document.getElementById("userAddress").value;
    user.City = document.getElementById("userCity").value;
    user.Zip = document.getElementById("userZip").value;
    user.PhoneNumber = document.getElementById("userPhoneNo").value;
    user.Hobbies = document.getElementById("userHobbies").value;
    console.log(user);
    

    if(user.ConfirmPwd !== user.Password){
        document.getElementById("passwordinfo").innerHTML = "Passwords are not the same!";
        console.log(document.getElementById("passwordinfo").innerHTML);
        // alert("Passwords are not the same!")
        return false;
       
    }

    let emailpattern = "@((gmail.com))";
    if (document.getElementById("userEmail").value.match(emailpattern)){
        document.getElementById("emailinfo").innerHTML="";
        return true;
    } else {
        document.getElementById("emailinfo").innerHTML="Email can only have '@gmail.com' ";
        //alert("Email can only have '@gmail.com'")
        return false;
    }

    let pswpattern ="(?=.*\d)(?=.*[A-Z]).{8,}";
    if (document.getElementById("userPassword").value.match(pswpattern)){
        return true;
    } else {
        document.getElementById("passwordinfo").innerHTML="Password must contain at least 1 number & 1 uppercase.";
        
        //alert("Password must contain at least 1 number & 1 uppercase.")
    }

}


