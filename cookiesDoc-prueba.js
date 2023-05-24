//cargar los datos de la cookie
const medicosCookie = JSON.parse(obtenercookies('doctores'));
const pacientesCookies = JSON.parse(obtenercookies('pacientes')) || "[]";
const tablaMedicos = document.getElementById("table-container-Medicoss");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

medicosCookie.forEach(medico => {
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

    let pacientesEncontrados = pacientesCookies.filter(paciente => paciente.EspecialidadDoc === medico.EspecialidadDoc);
    //se cre la celda
    const doctorPaciente = fila.insertCell();
    if (pacientesEncontrados.length > 0) {
        doctorPaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = doctorPaciente.querySelector("#pacientes")
        pacientesEncontrados.forEach(paciente => {
            pacientes.innerHTML += `<li>${pacientesEncontrados.nombrePaciente}</li>`;
        });
    } else {

        doctorPaciente.textContent = "Sin pacientes";
    }

    
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
