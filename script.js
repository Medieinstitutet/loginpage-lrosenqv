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
let loginBtn = document.getElementById("loginBtn").addEventListener("click", validateUser)

function validateUser() {
    let userNameInput = document.getElementById("userNameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    let login = userList.find((userList) => {
        return userNameInput == userList.userName && passwordInput == userList.password;
    });

    console.log(login)

    if(login) {
        console.log("Loggar in")
        return login
    } console.log("Something went wrong")
}

/*if(userList == null) {
    localStorage.setItem("userList", JSON.stringify(passwords));
}  */

console.log(userList)


// Hämta alla element
let userNameInput = document.getElementById("userNameInput")
let passwordInput = document.getElementById("passwordInput")

//Knappar
let signUpBtn = document.getElementById("signUpBtn").addEventListener("click", addNewUser)


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


