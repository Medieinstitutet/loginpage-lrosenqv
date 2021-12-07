// Arrays och logg till localStorage

let userList = [
    {userName : "Kanye", password : "westtest"},
    {userName : "Janne", password : "test"},
    {userName : "Snoop", password : "dogg"}
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
let userNameInput = document.getElementById("userNameInput").value;
let passwordInput = document.getElementById("passwordInput").value;

let foundUser = userList.find(name => name.userName == userNameInput);
console.log(foundUser)


function addNewUser() {

    let userList = getUsersFromLS();

    let newUserName = userNameInput;
    let newPassword = passwordInput;

    console.log(newUserName)

    let message = document.getElementById("message");

    if(!foundUser && newPassword) {
        console.log("new user!");
        return localStorage.setItem("userList", JSON.stringify(userList)); 

    } else if (foundUser && newPassword) { 

        console.log("Användare finns redan");
        return message.innerText = "Användarnamn existerar redan";

    } else {
        console.log("tomma fält");
        return message.innerText = "Vänligen kontrollera att du fyllt i alla fält";
    }
}
