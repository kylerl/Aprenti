window.onload = getProfile()

function getProfile() {
    firebase.database().ref('/profiles').on('value', (snapshot) => {
        let data = snapshot.val()
        for (key in data) {
            // console.log(data[key].firstName)
            if (localStorage.getItem("email") === data[key].email) {
                console.log("yeet")
                let yourProfile = data[].filter(data[key].email === localStorage.getItem("email"))
                console.log(yourProfile)
                
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
