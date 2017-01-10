var theUsername = "appacademystudent"
var thePassword = "p@ssword"

/* This function should only alert "Access granted" if theUsername is "appacademystudent" and thePassword is "pizza". If the username is incorrect, it should alert "I don't know that username.". If the username is correct but the password is wrong, it should alert "Access denied." */

function checkPassword() {
    if (theUsername == "appacademystudent") {
        if (thePassword == "pizza") {
            alert("Access granted.")
        } else {
            alert("Access denied.")
                
        }
    }
