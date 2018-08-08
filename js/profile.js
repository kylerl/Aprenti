window.onload = getProfile()
let profileName = document.querySelector("#profileName")
let profileSchool = document.querySelector("#profileSchool")
let profileEmail = document.querySelector("#profileEmail")

function getProfile() {
    firebase.database().ref('/profiles').on('value', (snapshot) => {
        let data = snapshot.val()
        for (key in data) {
            console.log(key)
            console.log(data[key].email)
            // console.log(data[key].firstName)
            if (localStorage.getItem("email") == data[key].email) {
                console.log(localStorage.getItem("email"))
                profileName.innerHTML = `${data[key].firstName} ${data[key].lastName}`
                profileSchool.innerHTML = `${data[key].schoolName} `
                profileEmail.innerHTML = `${data[key].email} `
            }


        }
    })
}
