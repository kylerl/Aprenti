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
    e.preventDefault()

    let firstName = document.querySelector("#first_name").value
    let lastName = document.querySelector("#last_name").value
    let schoolName = document.querySelector("#school_name").value
    let email = document.querySelector("#makeEmail").value
    let password = document.querySelector("#makePassword").value
    let profile = {
        firstName: firstName,
        lastName: lastName,
        schoolName: schoolName,
        email: email
    }
    console.log(profile)
    firebase.database().ref('/profiles').push(profile)
    console.log('firebase')
    createAccount(email, password)


    // console.log(emailCreate)
    // console.log(passwordCreate)
})



function createAccount(email, password) {
    localStorage.setItem("email", email)
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data) {

        console.log(password)
        console.log(email)

        window.location.href = "http://aprentis-internships.me/profile.html"

        // signUp.innerHTML = `Sign Out `
        // saveInfo(data)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
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
