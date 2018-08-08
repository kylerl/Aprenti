function getPostings() {
    firebase.database().ref('/internshipOpportunities').on('value', (snapshot) => {
        let data = snapshot.val()
        let displayPostings = document.querySelector('#postings')
        for (key in data) {
            displayPostings.innerHTML += `
            <div class="jumbotron jumboBoi">
                <h1 class="text-uppercase text-white">${data[key].title}</h1>
                <hr class="my-4">
                <p class="text-white">${data[key].description}</p>
                <p c1ass="text-white" style="color:white">${data[key].email}</p>
            </div>
            `
        }
    })
}

window.onload = getPostings

// <div class="jumbotron">
//       <h1 class="text-uppercase">Hello, world!</h1>
//       <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//       <hr class="my-4">
//       <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//       <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//     </div>