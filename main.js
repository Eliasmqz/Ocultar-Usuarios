const users = [
    {
        name: "Jose Elias Marquez Castro",
        age: 22,
        ocupation: "dev",
        hobbies: ["tocar guitarra", "cantar", "jugar videojuegos"],
    },
    {
        name: "juan carlos amaranto gonzalez",
        age: 27,
        ocupation: "dev",
        hobbies: [
            "jugar futbol",
            "ir al cine",
            "viajar",
            "comer",
            "bailar",
            "jugar",
            "reir",
        ],
    },
    {
        name: "Laciar Ignacio",
        age: 28,
        ocupation: "Medico",
        hobbies: ["leer", "futsal", "entrenar"],
    },
    {
        name: "Francisco Ortiz",
        age: 28,
        ocupation: "dev",
        hobbies: ["Programar", "Ver peliculas", "Comer", "Viajar"],
    },
    {
        name: "diego” jaldin",
        age: 26,
        ocupation: "pilot”, “future web full stack",
        hobbies: [
            "volar",
            "jugar futbol",
            "enseñar",
            "comer",
            "andar en moto",
            "jugar",
            "viajar",
        ],
    },
    {
        name: "Jesus Roberto Baez Castro",
        age: 31,
        ocupation: "camillero",
        hobbies: ["ajedrez", "leer", "patinar"],
    },
    {
        name: "Romero hugo andres",
        age: 20,
        ocupation: "profe",
        hobbies: ["arte marcial", "boxeo", "fierros"],
    },
    {
        name: "Jose Elias Marquez Castro",
        age: 22,
        ocupation: "dev",
        hobbies: ["tocar guitarra", "cantar", "jugar videojuegos"],
    },
    {
        name: "juan carlos amaranto gonzalez",
        age: 27,
        ocupation: "dev",
        hobbies: [
            "jugar futbol",
            "ir al cine",
            "viajar",
            "comer",
            "bailar",
            "jugar",
            "reir",
        ],
    },
    {
        name: "Laciar Ignacio",
        age: 28,
        ocupation: "Medico",
        hobbies: ["leer", "futsal", "entrenar"],
    },
    {
        name: "Francisco Ortiz",
        age: 28,
        ocupation: "dev",
        hobbies: ["Programar", "Ver peliculas", "Comer", "Viajar"],
    },
    {
        name: "diego” jaldin",
        age: 26,
        ocupation: "pilot”, “future web full stack",
        hobbies: [
            "volar",
            "jugar futbol",
            "enseñar",
            "comer",
            "andar en moto",
            "jugar",
            "viajar",
        ],
    },
    {
        name: "Jesus Roberto Baez Castro",
        age: 31,
        ocupation: "camillero",
        hobbies: ["ajedrez", "leer", "patinar"],
    },
    {
        name: "Romero hugo andres",
        age: 20,
        ocupation: "profe",
        hobbies: ["arte marcial", "boxeo", "fierros"],
    },
];

const contentUsers = document.querySelector(".contentUsers");
const btnShowUser = document.querySelector("#btnShowUser");
const hideUsers = document.querySelector(".hide_users")

function printHobbies(hobbies) {
    let hmtlHobbies = "";

    for (const hobbie of hobbies) {
        hmtlHobbies += `<li>${hobbie}</li>`;
    }

    return hmtlHobbies;
}

function printUser() {
    let html = "";
    for (const user of users) {
        let bgCard = user.age > 25 ? "card__bg-red" : "card__bg-green";

        html += `
        <div class="user ${bgCard}" >
            <h3>nombre: ${user.name}</h3>
            <p>edad: ${user.age}</p>
            <p><b>ocupacion: ${user.ocupation}</b></p>
            <h4>hobbies</h4>
            <ul>
                ${printHobbies(user.hobbies)}
            </ul>
        </div>
    `;
    }



contentUsers.innerHTML = html;
}

function showAndhide() {
    contentUsers.classList.toggle("hide_users");
    if(!contentUsers.classList.contains("hide_users")){
        btnShowUser.innerHTML = "Ocultar Usuarios";
    }else{
        btnShowUser.innerHTML = "Mostrar Usuarios"
    }

}



btnShowUser.addEventListener("click", printUser);
btnShowUser.addEventListener("click", showAndhide);







// completar el codigo para cuando le demos click al boton desaparezcan los usuarios
