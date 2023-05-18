const InfoDoc = document.getElementById('FormuPas')
InfoDoc.addEventListener('submit', (event) => {
    event.preventDefault();
    const DatosDoc = {
        CedulaPas: document.getElementById('cedula').value,
        NombrePas: document.getElementById('nombre').value,
        ApellidoPas: document.getElementById('apellido').value,
        EdadPas: document.getElementById('edad').value,
        TelefonoPas: document.getElementById('telefono').value,
        EspecialidadPas: document.getElementById('especialidad').value
    }
   
    guardardoctores(DatosDoc)
    const confiermar = confirm("desea ingresar mas pacientes o ver los datos ?")
    if(confiermar=== true){
        window.location.href="mostrarpacientes.html"
    }
    else{
        FormuDoc.reset()
    }
})

function guardardoctores(DatosDoc) {
    let datos = obtenercookies("pacientes")
    if(datos===""){
        datos= "[]"
    }
    const docObjetos= JSON.parse(datos)
    docObjetos.push(DatosDoc)
    const jsonDatos = JSON.stringify(docObjetos)
    cabiarCookie("pacientes",jsonDatos)
}

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


function cabiarCookie(nombre, valor) {

    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}