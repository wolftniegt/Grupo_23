//cargar los datos de la cookie
const medicosCookie = JSON.parse(obtenercookies('doctores'));
/* const mascotasCookie = JSON.parse(getCookie('mascotas') || "[]"); */
const tablaMedicos = document.getElementById("table-container-Medicoss");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

pacienteCookie.forEach(medico => {
    const fila = cuerpoTabla.insertRow();

    const CedulaDoc = fila.insertCell();
    CedulaDoc.textContent = medico.CedulaDoc;


    const NombreDoc = fila.insertCell();
    NombreDoc.textContent = medico.NombreDoc;

    const ApellidoDoc = fila.insertCell();
    ApellidoDoc.textContent = medico.ApellidoDoc;
    
    const EspecialidadDoc = fila.insertCell();
    EspecialidadDoc.textContent = medico.EspecialidadDoc;

    const ConsultorioDoc = fila.insertCell();
    ConsultorioDoc.textContent = medico.ConsultorioDoc;

    const CorreoDoc = fila.insertCell();
    CorreoDoc.textContent = medico.CorreoDoc;

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
