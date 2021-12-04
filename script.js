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

    let userList = getUsersFromLS();

    let newUserName = document.getElementById("userNameInput").value;
    let newPassword = document.getElementById("passwordInput").value;

    let checkUser = userList.find(userList => userList.userName == newUserName);
    console.log(checkUser)

    let createUser = !checkUser && newPassword;

    let message = document.getElementById("message");

    if(createUser) {
        console.log("new user!");
        return localStorage.setItem("userList", JSON.stringify(userList)); 

    } else if (checkUser && newPassword) { 

        console.log("Användare finns redan");
        return message.innerText = "Användarnamn existerar redan";

    } else {
        console.log("tomma fält");
        return message.innerText = "Vänligen kontrollera att du fyllt i alla fält";
    }

    
}
