let submitBtn = document.querySelector("#submit")
// var today = new Date()
// var dd = today.getDate()
// var mm = today.getMonth()+1
// var yyyy = today.getFullYear()

// if(dd<10) {
//     dd = '0'+dd
// } 

// if(mm<10) {
//     mm = '0'+mm
// } 

// today = mm + '/' + dd + '/' + yyyy
// console.log(today)


submitBtn.addEventListener("click", e => {
    e.preventDefault()

    let title = document.querySelector("#postingTitle").value
    let description = document.querySelector("#postingDescription").value
    // let image = document.querySelector("#postingImage").value
    let email = document.querySelector("#email").value
    // let price = document.querySelector("#price").value

    let posting = {
        title: title,
        description: description,
        // image: image,
        email: email,
        // price: price
    }
    // console.log (posting)

    firebase.database().ref("/internshipOpportunities").push(posting)
})



















