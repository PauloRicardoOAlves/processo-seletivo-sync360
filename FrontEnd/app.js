function userData() {


    const name = document.getElementById("inputName").value
    const age = document.getElementById("inputAge").value
    const adress = document.getElementById("inputAdress").value
    const adress2 = document.getElementById("inputAdress2").value
    const city = document.getElementById("inputCity").value
    const state = document.getElementById("inputState").value
    const bio = document.getElementById("inputBio").value

    console.log(name)

    data = {
        name,
        age,
        adress,
        adress2,
        city,
        state,
        bio
    }

    send(data)
}

async function send(data) {

    const body = JSON.stringify(data)
    console.log(body)

    const init = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    const response = await fetch("/user", init)
    const dados = await response.json()
}



