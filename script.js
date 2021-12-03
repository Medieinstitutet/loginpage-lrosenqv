// Arrays och logg till localStorage
let userNames = ["Louise", "Janne", "Victor"];

if(userNames == null) {
    localStorage.setItem("userNames", JSON.stringify(userNames));
}

let passwords = ["chihuahua", "test", "test2"];

if(passwords == null) {
    localStorage.setItem("passwords", JSON.stringify(passwords));
}

// Hämta alla element
let userNameInput = document.getElementById("userNameInput")
let passwordInput = document.getElementById("passwordInput")

//Knappar
let loginBtn = document.getElementById("loginBtn").addEventListener("click", validateUser)
 
let signUpBtn = document.getElementById("signUpBtn").addEventListener("click", addNewUser)


//Hämta listor från Local storage
function getUsersFromLS() {
    let collectedUserList = localStorage.getItem("userNames");

    let userNames = []

    if(collectedUserList) {
        userNames = JSON.parse(collectedUserList);
        return userNames 
    }
}

function getPassFromLS() {
    let collectedPassList = localStorage.getItem("passwords");
    
    let passwords = []

    if(collectedPassList) {
        passwords = JSON.parse(collectedPassList);
        return passwords 
    }
}

//Inloggning och validering
function validateUser() {
    let userName = document.getElementById("userNameInput").value
    let password = document.getElementById("passwordInput").value
    
    for(let i = 0; i < userNames.length; i++) { 
        if((userName == userNames[i]) && (password == passwords[i])) {
            console.log("yaay"); 
            break; 

        } else {

            console.log("feel"); 
            break;}
        }
}

//Lägg till ny användare
function addNewUser() {

    let newUser = document.getElementById("userNameInput").value

    let userNames = getUsersFromLS() 

    userNames.push(newUser)

    localStorage.setItem("userNames", JSON.stringify(userNames))


    //Nytt lösenord   
    let newPass = document.getElementById("passwordInput").value

    let passwords = getPassFromLS() 
   
    passwords.push(newPass)
 
    localStorage.setItem("passwords", JSON.stringify(passwords))
}


