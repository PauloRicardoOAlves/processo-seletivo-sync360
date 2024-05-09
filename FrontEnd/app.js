document.getElementById("userForm").addEventListener("submit", async function (event) {
    event.preventDefault()

    const data = JSON.stringify(userData())
    
    
    fetch("http://localhost:3000/user", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
    .then(response => response.json())
    .then(data => alert(data))
    .catch(error => console.error("Erro:", error))
    
});


function userData() {
    
    const name = document.getElementById("inputName").value
    const age = document.getElementById("inputAge").value
    const adress = document.getElementById("inputAdress").value
    const adress2 = document.getElementById("inputAdress2").value
    const city = document.getElementById("inputCity").value
    const state = document.getElementById("inputState").value
    const bio = document.getElementById("inputBio").value
    
    data = {
        name,
        age,
        adress,
        adress2,
        city,
        state,
        bio
    }
    

    return data
}

function updateProfile() {
    const { name, age, adress, adress2, city, state, bio } = userData()
    

    let profileName = document.getElementById("profileName")
    let profileAge = document.getElementById("profileAge")
    let profileAdress = document.getElementById("profileAdress")
    let profileAdress2 = document.getElementById("profileAdress2")
    let profileCity = document.getElementById("profileCity")
    let profileState = document.getElementById("profileState")
    let profileBio = document.getElementById("profileBio")


    profileName.innerHTML = name
    profileAge.innerHTML = age
    profileAdress.innerHTML = adress
    profileAdress2.innerHTML = adress2
    profileCity.innerHTML = city
    profileState.innerHTML = state
    profileBio.innerHTML = bio
}