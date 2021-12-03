// Hämta alla element
let userNameInput = document.getElementById("userNameInput")
let signUpBtn = document.getElementById("signUpBtn")
let passwordInput = document.getElementById("passwordInput")

//Inloggningsknapp
let loginBtn = document.getElementById("loginBtn").addEventListener("click", validateUser)

// Array username
let userNames = ["Louise", "Janne", "Victor"];
localStorage.setItem("userNames", JSON.stringify(userNames))

// Array password
let passwords = ["chihuahua", "test", "test2"];
localStorage.setItem("passwords", JSON.stringify(passwords))

console.log(userNames, passwords)

//Inloggning och validering
function validateUser() {
    let userName = document.getElementById("userNameInput").value
    let password = document.getElementById("passwordInput").value
    
    for(let i = 0; i < userNames.length; i++) {

        //if(userNames.indexOf(userName) === passwords.indexOf(password)) {
        if((userName == userNames[i]) &&(password == passwords[i])) {
        console.log("yaay")
            break;

        } else {
            console.log("feel")
            break;
        }
    }
}