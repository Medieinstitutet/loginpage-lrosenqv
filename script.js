// Arrays och logg till localStorage
let userList = [
    {userName : "Louise", password : "chihuahua"},
    {userName : "Janne", password : "test"},
    {userName : "Victor", password : "test2"}
]

if(userList == null) {
    localStorage.setItem("userList", JSON.stringify(userList));
}

//Inloggning och validering
let loginBtn = document.getElementById("loginBtn").addEventListener("click", validateUser);

function validateUser() {
    let userList = getUsersFromLS();

    let userNameInput = document.getElementById("userNameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;

    let userOk = userList.find(userList => userList.userName == userNameInput);
    let passwordOk = userList.find(userList => userList.password == passwordInput);

    let validUser = userOk && passwordOk;

    let message = document.getElementById("message");

    if(validUser) {

        console.log("success!");
        return message.innerText = "inloggad";

    } else if (validUser = userOk && !passwordOk) { 

        console.log("fel password");
        return message.innerText = "fel lösenord";

    } else {
        console.log("helt fel hallå");
        return message.innerText = "Vänligen kontrollera att du har angett rätt inloggnings-uppgifter";

    }
}

// Hämta alla element
let userNameInput = document.getElementById("userNameInput")
let passwordInput = document.getElementById("passwordInput")

//Hämta listor från Local storage
function getUsersFromLS() {
    let collectedUserList = localStorage.getItem("userList");

    let userList = []

    if(collectedUserList) {
        userList = JSON.parse(collectedUserList);
        return userList
    }
}

//Lägg till ny användare
let signUpBtn = document.getElementById("signUpBtn").addEventListener("click", addNewUser)

function addNewUser() {
    let newUser = document.getElementById("userNameInput").value;
    let newPass = document.getElementById("passwordInput").value;

    let userList = getUsersFromLS()


    if(newUser & newPass !="") {

        userList.push({userName: newUser, password: newPass});
        console.log("Sparad användare")

        return localStorage.setItem("userList", JSON.stringify(userList));

        } else {
                console.log("Vänligen ange användarnamn och lösenord")
            }
    localStorage.setItem("userList", JSON.stringify(userList));
}

