const InfoDoc = document.getElementById('FormuDoc')
InfoDoc.addEventListener('submit', (event) => {
    event.preventDefault();
    const DatosDoc = {
        CedulaDoc: document.getElementById('cedula').value,
        NombreDoc: document.getElementById('nombre').value,
        ApellidoDoc: document.getElementById('apellido').value,
        CorreoDoc: document.getElementById('correo').value,
        ConsultorioDoc: document.getElementById('consultorio').value,
        EspecialidadDoc: document.getElementById('especialidad').value
    }
   
    guardardoctores(DatosDoc)
    const confiermar = confirm("desea ingresar mas doctores o ver los datos ?")
    if(confiermar=== true){
        window.location.href="mostarDoc.html"
    }
    else{
        FormuDoc.reset()
    }
})

function guardardoctores(DatosDoc) {
    let datos = obtenercookies("doctores")
    if(datos===""){
        datos= "[]"
    }
    const docObjetos= JSON.parse(datos)
    docObjetos.push(DatosDoc)
    const jsonDatos = JSON.stringify(docObjetos)
    cabiarCookie("doctores",jsonDatos)
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