let signUpButton = document.querySelector("#signUp")

let registerButton = document.querySelector("#register")

// signUp.addEventListener("click", e => {
//     if (localStorage.getItem("name")) {
//         addUserToScreen(data)

//         userName.innerHTML = `${ data.user.displayName }`
//         let profile = document.querySelector("#img")
//         profile.innerHTML = `<img class = "profile-img" id = "profile" src = "${data.user.photoURL}" alt = "" > `
//         signOut()
//         localStorage.clear()
//         signUp.innerHTML = `Sign In`
//     }

//     else {
//         signInWithGoogle()



//     }
// })

registerButton.addEventListener("click", e => {
    let emailCreate = document.querySelector("#makeEmail").value
    let passwordCreate = document.querySelector("#makePassword").value
    createAccount(emailCreate, passwordCreate)
    console.log(emailCreate)
    console.log(passwordCreate)
})



function createAccount(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data) {

        console.log(password)
        // signUp.innerHTML = `Sign Out `
        saveInfo(data)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

}

function saveInfo(userData) {
    let userName = userData.user.displayName
    let userEmail = userData.user.email
    let userPicture = userData.user.photoURL
    localStorage.setItem("name", userName)
    localStorage.setItem("email", userEmail)
    localStorage.setItem("picture", userPicture)
}

function signOut() {
    firebase.auth().signOut()
        .then(function() {
            localStorage.clear()
        })
}
