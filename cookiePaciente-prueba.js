//cargar los datos de la cookie
const medicosCookie = JSON.parse(obtenercookies('doctores')) || "[]";
const pacientesCookies = JSON.parse(obtenercookies('pacientes')) 
const tablaMedicos = document.getElementById("table-container-pacientes");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

pacientesCookies.forEach(paciente => {
    const fila = cuerpoTabla.insertRow();

    const NombrePas = fila.insertCell();
    NombrePas.textContent = paciente.NombrePas;

    const ApellidoPas = fila.insertCell();
    ApellidoPas.textContent = paciente.ApellidoPas;

    const CedulaPas = fila.insertCell();
    CedulaPas.textContent = paciente.CedulaPas;

    const EdadPas = fila.insertCell();
    EdadPas.textContent = paciente.EdadPas;
   

    const TelefonoPas = fila.insertCell();
    TelefonoPas.textContent = paciente.TelefonoPas;
   
    
    const EspecialidadPas = fila.insertCell();
    EspecialidadPas.textContent = paciente.EspecialidadPas;

    const doctorEspecialidad = medicosCookie.find(medico => medico.EspecialidadDoc === paciente.EspecialidadDoc)
    const pacienteDoctor = fila.insertCell();
    pacienteDoctor.textContent = doctorEspecialidad ? doctorEspecialidad.nombreDoctor: "Por Asignar"
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
