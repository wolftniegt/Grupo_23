//cargar los datos de la cookie
const medicosCookie = JSON.parse(obtenercookies('pacientes'));
/* const mascotasCookie = JSON.parse(getCookie('mascotas') || "[]"); */
const tablaMedicos = document.getElementById("table-container-pacientes");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

medicosCookie.forEach(medico => {
    const fila = cuerpoTabla.insertRow();

    const NombrePas = fila.insertCell();
    NombrePas.textContent = medico.NombrePas;

    const ApellidoPas = fila.insertCell();
    ApellidoPas.textContent = medico.ApellidoPas;

    const CedulaPas = fila.insertCell();
    CedulaPas.textContent = medico.CedulaPas;

    const EdadPas = fila.insertCell();
    EdadPas.textContent = medico.EdadPas;
   

    const TelefonoPas = fila.insertCell();
    TelefonoPas.textContent = medico.TelefonoPas;
   
    
    const EspecialidadPas = fila.insertCell();
    EspecialidadPas.textContent = medico.EspecialidadPas;




    //colocar las mascotas que atiende el medico
    //mediante filter encontramos todas las mascotas que tienen esa especialidad
/*     let mascotasEncontradas = mascotasCookie.filter(mascota => medico.especialidad === mascota.especialidad);
    if (mascotasEncontradas.length > 0) {
        const medicoMascota = fila.insertCell();
        medicoMascota.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicoMascota.querySelector("#pacientes")
        mascotasEncontradas.forEach(mascota => {
            pacientes.innerHTML += `<li>${mascota.nombreMascota}</li>`;
        });
    } else {
        const medicoMascota = fila.insertCell();
        medicoMascota.textContent = "Sin pacientes";
    } */
});



// Función para obtener los datos de la cookie
function obtenercookies(nombre) {
    const cookies = document.cookie.split("; ")
    for (let i = 0; i< cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1])
        }
    }
    return ""
}
