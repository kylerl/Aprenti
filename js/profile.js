window.onload = getProfile()

function getProfile() {
    firebase.database().ref('/Profiles').on('value', (snapshot) => {
        let data = snapshot.val()
        for (key in data) {
            if (localStorage.getItem("email") === data[key].email) {
                console.log(data[key].email)
            }

            // displayPostings.innerHTML += `
            // <div class="jumbotron jumboBoi">
            //     <h1 class="text-uppercase text-white">${data[key].title}</h1>
            //     <hr class="my-4">
            //     <p class="text-white">${data[key].description}</p>
            //     <p c1ass="text-white" style="color:white">${data[key].email}</p>
            // </div>
            // `
        }
    })
}
