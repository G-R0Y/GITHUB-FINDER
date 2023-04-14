// data json
// en js existe una funcion la cual se encarga de poder hacer una peticion a una url
//FETCH()
//es una funcion nativa (la asincronia) async
//existen varios tipos de peticiones
// GET = SIRVE PARA OBTENER INFO
// POST = SIRVE PARA CREAR DATOS
// PUT = SIRVE PARA ACTUALIZAR DATOS
// DELETE = SIRVE PARA ELIMINAR DATOS


// funcion asyn 
// estas funciones fueroni creadas para poder ejecutar algo, y en caso de la ejecucion de esto
// demore mas de lo normal se espera para luego responder la peticion

//https://api.github.com/users/G-R0Y
// hya tiempo de espera, no sabemos caunto demora por eso usamos async await


/// primero atrapamos todos los elementos que usaremos

const imageProfile = document.querySelector("#img-profile")
const githubName = document.querySelector("#github-name")
const githubUserName = document.querySelector("#github-username")
const githubJoined = document.querySelector("#github-joined")
const githubRepos = document.querySelector("#github-repos")
const githubFollowers = document.querySelector("#github-followers")
const githubFollowing = document.querySelector("#github-following")

const githubBio = document.querySelector("#github-bio")
const githubComp = document.querySelector("#github-comp")
const githubDir = document.querySelector("#github-dir")
const githubBlog = document.querySelector("#github-Blog")
const githubEmail = document.querySelector("#github-Email")
const githubTwitter = document.querySelector("#github-Twitter")

// accion

const githubActionSearch = document.querySelector("#github-action-search")
const githubInputSearch = document.querySelector("#github-search")

githubActionSearch.onclick = () => {
    const username = githubInputSearch.value
    if (username === "") {
        Swal.fire({
            title: "Error",
            text: "Enter a Username",
            icon: "error"
        })
    } else {
        obtenerDatosGitHub(username)
    }
}


githubInputSearch.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        if (event.target.value === "") {
            Swal.fire({
                title: "Error",
                text: "Enter a Username",
                icon: "error"
            })
        } else {
            obtenerDatosGitHub(event.target.value)
        }
    }
})


// la estructura de la funcion FETHC()

const obtenerDatosGitHub = async (nombre) => {
    const url = "https://api.github.com/users/" + nombre
    const response = await fetch(url)
    const data = await response.json()
    // debugger
    if (data.message === "Not Found") {
        Swal.fire({
            title: "Error",
            text: "User does not exist, please try again..",
            icon: "error"
        })
    } else {
        let date = new Date(data.created_at)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        switch (month) {
            case 1:
                month = "ene"
                break;
            case 2:
                month = "feb"
                break;
            case 3:
                month = "mar"
                break;
            case 4:
                month = "abr"
                break;
            case 5:
                month = "may"
                break;
            case 6:
                month = "jun"
                break;
            case 7:
                month = "jul"
                break;
            case 8:
                month = "ago"
                break;
            case 9:
                month = "sep"
                break;
            case 10:
                month = "oct"
                break;
            case 11:
                month = "nov"
                break;
            case 12:
                month = "dic"
                break;
        }

        let informacion = [
            data.avatar_url,
            data.name,
            data.login,
            data.public_repos,
            data.followers,
            data.following,
            data.bio,
            data.company,
            data.location,
            data.blog,
            data.email,
            data.twitter_username]

        for (let a = 0; a < informacion.length; a++) {
            if (informacion[a] === "" || informacion[a] === null) {
                informacion[a] = "---"
            }
            console.log(informacion);
        }

        imageProfile.src = informacion[0]
        githubName.textContent = informacion[1]
        githubUserName.textContent = informacion[2]
        githubRepos.textContent = informacion[3]
        githubFollowers.textContent = informacion[4]
        githubFollowing.textContent = informacion[5]
        githubBio.textContent = informacion[6]
        githubComp.textContent = informacion[7]
        githubDir.textContent = informacion[8]
        githubBlog.textContent = informacion[9]
        githubEmail.textContent = informacion[10]
        githubTwitter.textContent = informacion[11]
        githubJoined.textContent = `${day} ${month} ${year}`


    }
}



