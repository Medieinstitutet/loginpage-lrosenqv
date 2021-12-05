/* Mock-lista för testning !

let userList = [
    {userName : "Louise", password : "chihuahua"},
    {userName : "Janne", password : "test"},
    {userName : "Victor", password : "test2"}
] 
localStorage.setItem("userList", JSON.stringify(userList)) */


// Läsa in local storage
window.addEventListener("load", () => {
    getStorage()
})

function getStorage() {
    let collectedUsers = localStorage.getItem("userList")

    if(collectedUsers) {

        return userList
    }
}

// Inloggning och validering
let loginBtn = document.getElementById("loginBtn").addEventListener("click", validateUser);

function validateUser() {
    let userList = getStorage()

    let userExist = userList.find(userList => userList.userName == userInput.value);

    let passExist = userList.find(userList => userList.password == passInput.value);

    let message = document.getElementById("message");

    if(userExist && passExist) {
        return message.innerText = "inloggad";

    } else if (userExist && !passExist) { 
        return message.innerText = "fel lösenord";

    } else {
        return message.innerText = "Vänligen kontrollera att du har angett rätt inloggnings-uppgifter";
    }
}

// Lägg till ny användare
let signUpBtn = document.getElementById("signUpBtn").addEventListener("click",addNewUser);

function addNewUser() {
    let loginMsg = document.getElementById("message");

    let userValue = userInput.value
    let passValue = passInput.value

    let addUser = {
        userName: userInput.value,
        password: passInput.value
    }

    if(userValue && passValue) {
        let collectedUsers = localStorage.getItem("userList")

        if(collectedUsers) {
            collectedUsers = JSON.parse(collectedUsers)
        } else {
            collectedUsers = []
        }
        collectedUsers.push(addUser)

        loginMsg.innerText = "Success! Proceed to login with your user details";

        localStorage.setItem("userList", JSON.stringify(collectedUsers));
    }
    return loginMsg.innerText = "Vänligen kontrollera att du fyllt i alla fält";
}

