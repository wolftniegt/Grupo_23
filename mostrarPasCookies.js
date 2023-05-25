//cargar los datos de la cookie
const pacienteCookie = JSON.parse(obtenercookies('pacientes'));
const doctoresCookies = JSON.parse(obtenercookies('doctores') || "[]");
const tablaMedicos = document.getElementById("table-container-pacientes");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

pacienteCookie.forEach(pasiente => {
    const fila = cuerpoTabla.insertRow();

    const NombrePas = fila.insertCell();
    NombrePas.textContent = pasiente.NombrePas;

    const ApellidoPas = fila.insertCell();
    ApellidoPas.textContent = pasiente.ApellidoPas;

    const CedulaPas = fila.insertCell();
    CedulaPas.textContent = pasiente.CedulaPas;

    const EdadPas = fila.insertCell();
    EdadPas.textContent = pasiente.EdadPas;
    

    const TelefonoPas = fila.insertCell();
    TelefonoPas.textContent = pasiente.TelefonoPas;
    
    
    const EspecialidadPas = fila.insertCell();
    EspecialidadPas.textContent = pasiente.EspecialidadPas;




   //colocar el medico que va a tratar la mascota
    //mediante find encontramos el medico que tenga la especialidad
    //devuelde el medico que tenga esa especialidad
    const medicoEspecialidad = doctoresCookies.find(doctor => doctor.EspecialidadPas === pasiente.especialidadDoc);
    //crear la celda
    const celdaMedicoMascota = fila.insertCell();
    //si hay medicos colocar el nombre del medico, de lo contrario colocar por asignar
    celdaMedicoMascota.textContent = medicoEspecialidad ? medicoEspecialidad.NombreDoc : "Por asignar";
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
